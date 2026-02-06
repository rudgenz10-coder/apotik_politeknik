import Kategori from "../models/Kategori.js";
import Obat from "../models/Obat.js";
import Supplier from "../models/Supplier.js";

export default {
    async index(req, res) {
        const obat = await Obat.findAll({
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
            obat
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
        await Obat.create(req.body);

        res.redirect('/admin/obat')
    },

    async edit(req, res) {
        const supplier = await Supplier.findAll();
        const kategori = await Kategori.findAll();
        const obat = await Obat.findByPk({where: {id : req.params.id}});

        res.render('admin/obat/form', {
            kategori,
            supplier,
            obat,
            title: 'Tambah Obat',
            action: `/obat/update/${req.params.id}`
        });
    },

    async update(req, res) {
        
    }
}