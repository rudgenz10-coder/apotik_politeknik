export default {
    async index(req, res) {
        res.render('auth/dashboard', {
            title: "Dashboard"
        })
    }
}