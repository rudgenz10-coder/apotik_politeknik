import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";

const Obat = db.define('obat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_kategori: DataTypes.INTEGER,
    id_supplier: DataTypes.INTEGER,
    nama_obat: DataTypes.STRING,
    harga_beli: DataTypes.INTEGER,
    harga_jual: DataTypes.INTEGER,
    stok: DataTypes.INTEGER,
    tanggal_kadaluarsa: DataTypes.DATEONLY,
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    freezeTableName: true
});

export default Obat;