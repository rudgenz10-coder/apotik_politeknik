import express from "express";
import expressLayout from "express-ejs-layouts";
import userRoute from './src/routes/userRoute.js'
import masterDataRoute from './src/routes/masterDataRoute.js'

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(expressLayout);
app.set('layout', 'layouts/main');

app.use('/user', userRoute);
app.use('/masterData', masterDataRoute)

export default app;