import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Supplier = db.define('supplier', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_supplier: {
        type: DataTypes.STRING,
        allowNull: false
    },
    no_telp: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    alamat: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Supplier;