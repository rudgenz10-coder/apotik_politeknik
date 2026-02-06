import userController from "../controllers/userController.js";
import express from "express";

const route = express.Router();

route.get('/', userController.index);
route.get('/create', userController.create);
route.post('/store', userController.store);
route.get('/edit/:id', userController.edit);
route.post('/update/:id', userController.update);
route.get('/delete/:id', userController.delete);

export default route;