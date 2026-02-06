import { DataTypes } from "sequelize";
import db from "../config/db.js";

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nama_lengkap: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('kasir', 'admin'),
        defaultValue: 'admin',
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default User;

