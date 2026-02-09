import db from "../config/db.js";
import Transaksi from "../models/Transaksi.js";
import TransaksiDetail from "../models/DetailTransaksi.js";
import Obat from "../models/Obat.js";

export default {

  // ============================
  // HALAMAN TRANSAKSI KASIR
  // ============================
  async index(req, res) {
    try {
      console.log("SESSION USER:", req.session.user);

      const obat = await Obat.findAll({
        where: { is_active: true }
      });

      res.render("kasir/transaksi", {
        title: "Transaksi Kasir",
        obat,
        kasir: req.session.user
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // ============================
  // SIMPAN TRANSAKSI
  // ============================
  async store(req, res) {
    const t = await db.transaction();

    try {
      const { obat_id, qty, bayar } = req.body;
      const kasirId = req.session.user.id;

      let total = 0;
      const items = [];

      // Normalisasi input (jika multiple item)
      const obatIds = Array.isArray(obat_id) ? obat_id : [obat_id];
      const qtys = Array.isArray(qty) ? qty : [qty];

      for (let i = 0; i < obatIds.length; i++) {
        const obat = await Obat.findByPk(obatIds[i], { transaction: t });

        if (!obat) throw new Error("Obat tidak ditemukan");
        if (obat.stok < qtys[i]) {
          throw new Error(`Stok ${obat.nama_obat} tidak cukup`);
        }

        const subtotal = obat.harga_jual * qtys[i];
        total += subtotal;

        items.push({
          obat,
          qty: qtys[i],
          subtotal
        });
      }

      if (bayar < total) {
        throw new Error("Uang bayar kurang");
      }

      const kembalian = bayar - total;

      // Simpan transaksi
      const transaksi = await Transaksi.create({
        kasir_id: kasirId,
        total,
        bayar,
        kembalian
      }, { transaction: t });

      // Detail + update stok
      for (const item of items) {
        await TransaksiDetail.create({
          transaksi_id: transaksi.id,
          obat_id: item.obat.id,
          qty: item.qty,
          harga: item.obat.harga_jual,
          subtotal: item.subtotal
        }, { transaction: t });

        await item.obat.update({
          stok: item.obat.stok - item.qty
        }, { transaction: t });
      }

      await t.commit();

      // Redirect ke struk
      res.redirect(`/transaksi/${transaksi.id}/struk`);

    } catch (error) {
      await t.rollback();
      res.redirect("/transaksi?error=" + error.message);
    }
  },

  // ============================
  // STRUK TRANSAKSI
  // ============================
  async struk(req, res) {
    try {
      const transaksi = await Transaksi.findByPk(req.params.id, {
        include: [{
          model: TransaksiDetail,
          include: [Obat]
        }]
      });

      if (!transaksi) {
        return res.redirect("/transaksi");
      }

      res.render("kasir/struk", {
        title: "Struk Pembelian",
        transaksi
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

};
