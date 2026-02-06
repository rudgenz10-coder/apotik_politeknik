import User from "../models/User.js";
import bcrypt from 'bcrypt';

export default {
    async index(req, res) {
        const user = await User.findAll();

        res.render('admin/user/index', {
            title: 'Data User',
            user
        });
    },

    async create(req, res) {
        res.render('admin/user/form', {
            user: {},
            title: 'Tambah User',
            action: '/user/store'
        });
    }, 

    async store(req, res) {
        const {username, password, nama_lengkap, role} = req.body;

        const hashPass = await bcrypt.hash(password, 10);

        await User.create({
            username,
            password: hashPass,
            nama_lengkap,
            role
        });

        res.redirect('/user')
    },

    async edit(req, res) {
        const user = await User.findByPk(req.params.id);

        res.render('admin/user/form', {
            user,
            title: 'Edit User',
            action: `/user/update/${req.params.id}`
        });
    },

    async update(req, res) {
        const { username, password, nama_lengkap, role} = req.body;
        
        if(!password || password === "") {
            await User.update(req.body, {where: {id: req.params.id}});
        } else {
            const newPass = await bcrypt.hash(password, 10);
            await User.update({
                username,
                password: newPass,
                nama_lengkap,
                role
            }, {
                where: {id: req.params.id}
            })
        }

        res.redirect('/user');
    },

    async delete(req, res) {
        await User.destroy({where: {id: req.params.id}})

        res.redirect('/user')
    }
}