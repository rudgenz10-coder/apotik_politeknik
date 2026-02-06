import DetailTransaksi from "./DetailTransaksi.js";
import Kategori from './Kategori.js';
import Log from './Log.js';
import Obat from "./Obat.js";
import Supplier from './Supplier.js';
import Transaksi from "./Transaksi.js";
import User from './User.js';

export default function Index() {
    // relasasi user --> transaksi
    User.hasMany(Transaksi, {
        foreignKey: 'id_user',
        as: 'transaksi'
    });
    Transaksi.belongsTo(User, {
        foreignKey: 'id_user',
        as: 'user'
    });

    // relasasi user --> log
    User.hasMany(Log, {
        foreignKey: 'id_user',
        as: 'log'
    });
    Log.belongsTo(User, {
        foreignKey: 'id_user',
        as: 'user'
    });

    // relasasi kategori --> obat 
    Kategori.hasMany(Obat, {
        foreignKey: 'id_kategori',
        as: 'obat'
    });
    Obat.belongsTo(Kategori, {
        foreignKey: 'id_kategori',
        as: 'kategori'
    });

    // relasasi supplier --> obat
    Supplier.hasMany(Obat, {
        foreignKey: 'id_supplier',
        as: 'obat'
    });
    Obat.belongsTo(Supplier, {
        foreignKey: 'id_supplier',
        as: 'supplier'
    });

    // relasasi transaksi --> detail transaksi
    Transaksi.hasMany(DetailTransaksi, {
        foreignKey: 'id_transaksi',
        as: 'detail_transaksi'
    });
    DetailTransaksi.belongsTo(Transaksi, {
        foreignKey: 'id_transaksi',
        as: 'transaksi'
    });

    // relasasi obat --> detail transaksi
    Obat.hasMany(DetailTransaksi, {
        foreignKey: 'id_obat',
        as: 'detail_transaksi'
    });
    DetailTransaksi.belongsTo(Obat, {
        foreignKey: 'id_obat',
        as: 'obat'
    });

    console.log('Relasasi ws di gawe');
}