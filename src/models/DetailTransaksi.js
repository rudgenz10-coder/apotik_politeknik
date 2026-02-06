import { DataTypes } from "sequelize";
import db from "../config/db.js";

const DetailTransaksi = db.define('detail_transaksi', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_transaksi: DataTypes.INTEGER,
    id_obat: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.INTEGER
}, {
    freezeTableName: true
});

export default DetailTransaksi;