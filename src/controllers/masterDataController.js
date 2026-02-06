import Supplier from "../models/Supplier.js";
import Kategori from "../models/Kategori.js";

export default {
    async index(req, res) {
        const supplier = await Supplier.findAll();
        const kategori = await Kategori.findAll();

        res.render('admin/masterData/index', {
            title: 'Data Kategori dan Supplier',
            supplier,
            kategori
        });
    }
}