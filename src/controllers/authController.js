import User from "../models/User.js";
import bcrypt from 'bcrypt';

export default {
    async index(req, res) {
        const { username, password } = req.body;

        const user = await User.findOne({where: {username}});

        const isMatch = await bcrypt.compare(password, user.password);

        if(!user || !isMatch) {
            res.redirect('/auth?err=username atau password salah');
        }

        req.session.user = {
            id: user.id,
            username: user.username,
            role: user.role
        }

        res.redirect('/dashboard');
    }
}