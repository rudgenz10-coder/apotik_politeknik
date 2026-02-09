import obatController from "../controllers/obatController.js";
import express from "express";
import isAuth from "../middlewares/auth.js";

const route = express.Router();

route.get('/', isAuth, obatController.index);
route.get('/create', obatController.create);
route.post('/store', obatController.store);
route.get('/edit/:id', obatController.edit);
route.post('/update/:id', obatController.update);
route.get('/delete/:id', obatController.delete);

export default route;