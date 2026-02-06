import Supplier from "../models/Supplier.js";

export default {

    async create(req, res) {
        res.render('admin/masterData/formSupplier', {
            supplier: {},
            title: 'Tambah Supplier',
            action: '/masterData/supplier/store'
        });
    }, 

    async store(req, res) {
        const {nama_supplier} = req.body
        const supplier = await Supplier.findOne({where: nama_supplier});

        if(supplier) {
            res.render('admin/masterData/formSupplier', {
                supplier: {},
                title: 'Tambah Supplier',
                action: '/supplier/store',
                error: 'supplier sudah ada'
            })
        }
        await Supplier.create(req.body);

        res.redirect('/masterData')
    },

    async edit(req, res) {
        const supplier = await Supplier.findByPk(req.params.id);

        res.render('admin/masterData/formSupplier', {
            supplier,
            title: 'Edit Supplier',
            action: `/supplier/update/${req.params.id}`
        });
    },

    async update(req, res) {
        await Supplier.update(req.body, {where: {id: req.params.id}})

        res.redirect('/masterData');
    },

    async delete(req, res) {
        await Supplier.destroy({where: {id: req.params.id}})

        res.redirect('/masterData')
    }
}