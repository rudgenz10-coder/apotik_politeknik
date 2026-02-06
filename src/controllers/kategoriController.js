import Kategori from "../models/Kategori.js";

export default {

    async create(req, res) {
        res.render('admin/masterData/formKategori', {
            kategori: {},
            title: 'Tambah Kategori',
            action: '/masterData/kategori/store'
        });
    }, 

    async store(req, res) {
        const {nama_kategori} = req.body
        const kategori = await Kategori.findOne({where: nama_kategori});

        if(kategori) {
            res.render('admin/masterData/formKategori', {
                kategori: {},
                title: 'Tambah Kategori',
                action: '/kategori/store',
                error: 'kategori sudah ada'
            })
        }
        await Kategori.create(req.body);

        res.redirect('/masterData')
    },

    async edit(req, res) {
        const kategori = await Kategori.findByPk(req.params.id);

        res.render('admin/masterData/formKategori', {
            kategori,
            title: 'Edit Kategori',
            action: `/kategori/update/${req.params.id}`
        });
    },

    async update(req, res) {
        await Kategori.update(req.body, {where: {id: req.params.id}})

        res.redirect('/masterData');
    },

    async delete(req, res) {
        await Kategori.destroy({where: {id: req.params.id}})

        res.redirect('/masterData')
    }
}