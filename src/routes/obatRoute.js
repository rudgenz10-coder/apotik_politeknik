import obatController from "../controllers/obatController.js";
import express from "express";

const route = express.Router();

route.get('/', obatController.index);
route.get('/create', obatController.create);
route.post('/store', obatController.store);
route.get('/edit/:id', obatController.edit);
route.post('/update/:id', obatController.update);
route.get('/delete/:id', obatController.delete);

export default route;