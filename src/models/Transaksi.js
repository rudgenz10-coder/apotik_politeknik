import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";

const Transaksi = db.define('transaksi', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    no_transaksi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tanggal_transaksi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_bayar: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    freezeTableName: true
});

export default Transaksi;