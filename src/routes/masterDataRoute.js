import express from "express";
import masterDataController from "../controllers/masterDataController.js";
import kategoriController from "../controllers/kategoriController.js";
import supplierController from "../controllers/supplierController.js";

const route = express.Router();

route.get('/', masterDataController.index);
// kategori
route.get('/kategori/create', kategoriController.create);
route.get('/kategori/store', kategoriController.store);
route.get('/kategori/edit/:id', kategoriController.edit);
route.get('/kategori/update/:id', kategoriController.update);
route.get('/kategori/delete/:id', kategoriController.delete);

// supplier
route.get('/supplier/create', supplierController.create);
route.get('/supplier/store', supplierController.store);
route.get('/supplier/edit/:id', supplierController.edit);
route.get('/supplier/update/:id', supplierController.update);
route.get('/supplier/delete/:id', supplierController.delete);

export default route;