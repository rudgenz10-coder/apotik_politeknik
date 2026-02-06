import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Kategori = db.define('Kategori', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_kategori: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Kategori;