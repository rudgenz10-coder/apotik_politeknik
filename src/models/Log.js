import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";

const Log = db.define('log', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    aktivitas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    waktu: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Log;