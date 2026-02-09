import User from "../models/User.js";
import bcrypt from 'bcrypt';

export default {
    async index(req, res) {
        const { username, password } = req.body;

        const user = await User.findOne({where: {username}});

        const isMatch = await bcrypt.compare(password, user.password);

        if(!user || !isMatch) {
            return res.redirect('/');
        }

        req.session.user = {
            id: user.id,
            username: user.username,
            role: user.role
        }

        console.log(req.session.user)

        return res.redirect('/dashboard');
    }
}