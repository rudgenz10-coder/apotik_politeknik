
const isAuth = (req, res, next) => {
    if(!req.session.user) {
        res.redirect('/login');
    }
}
 export default isAuth;