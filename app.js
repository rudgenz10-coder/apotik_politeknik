import express from "express";
import expressLayout from "express-ejs-layouts";
import session from "express-session";
import userRoute from './src/routes/userRoute.js'
import masterDataRoute from './src/routes/masterDataRoute.js'
import obatRoute from './src/routes/obatRoute.js';
import authRoute from './src/routes/authRoute.js';
import transaksiRoute from './src/routes/transaksiRoute.js'

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(expressLayout);
app.set('layout', 'layouts/main');

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialize: false
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next()
})
app.use('/', authRoute)
app.use('/user', userRoute);
app.use('/masterData', masterDataRoute);
app.use('/obat', obatRoute);
app.use('/transaksi', transaksiRoute);

export default app;