import express from "express";
import transaksiController from "../controllers/transaksiController.js";
import isAuth from "../middlewares/auth.js";

const route = express.Router();

route.get('/', isAuth, transaksiController.index);
route.post('/', transaksiController.store);
route.get('/:id/struk', transaksiController.struk)
export default route;