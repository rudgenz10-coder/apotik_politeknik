import Kategori from "../models/Kategori.js";
import Obat from "../models/Obat.js";
import Supplier from "../models/Supplier.js";

export default {
    async index(req, res) {
        const today = new Date();
        const warningDate = new Date();
        warningDate.setDate(today.getDate() + 30);
        const obat = await Obat.findAll({
            where: {is_active : true},
            include: [
                {
                    model: Kategori,
                    as: 'kategori'
                }, {
                    model: Supplier,
                    as: 'supplier'
                }
            ]
        });

        res.render('admin/obat/index', {
            title: 'Data Obat',
            obat,
            today,
            warningDate
        });
    }, 

    async create(req, res) {
        const supplier = await Supplier.findAll();
        const kategori = await Kategori.findAll();

        res.render('admin/obat/form', {
            kategori,
            supplier,
            obat: {},
            title: 'Tambah Obat',
            action: '/obat/store'
        });
    },

    async store(req, res) {
        const data = req.body;
        if(new Date(data.tanggal_kadaluarsa) <= new Date()) {
            res.redirect('/admin/obat/form');
        }
        await Obat.create({...data, is_active: true});

        res.redirect('/obat')
    },

    async edit(req, res) {
        const supplier = await Supplier.findAll();
        const kategori = await Kategori.findAll();
        const obat = await Obat.findByPk(req.params.id);

        res.render('admin/obat/form', {
            kategori,
            supplier,
            obat,
            title: 'Tambah Obat',
            action: `/obat/update/${req.params.id}`
        });
    },

    async update(req, res) {
        await Obat.update(req.body, {where: {id: req.params.id}});

        res.redirect('/obat');
    },

    async delete(req, res) {
        await Obat.findByPk(req.params.id)

        await Obat.update({is_active : false});
    }
}