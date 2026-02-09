import express from "express";
import authController from "../controllers/authController.js";
import dashboardController from "../controllers/dashboardController.js";

const route = express.Router();

route.get('/', (req, res) => res.render('auth/login', {layout: false}));
route.post('/login', authController.index);
route.get('/dashboard', dashboardController.index);

export default route;