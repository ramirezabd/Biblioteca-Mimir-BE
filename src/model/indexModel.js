const Sequelize = require("sequelize")
const sequelize = new Sequelize("Biblioteka", "root", "",{
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 30000,
        acquire: 10000,
    },
});

const db = {};


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.anggota = require("./anggota")(sequelize,Sequelize)
db.buku = require("./buku")(sequelize,Sequelize)
db.peminjaman = require("./peminjaman")(sequelize,Sequelize)
db.pengembalian = require("./pengembalian")(sequelize,Sequelize)
db.petugas = require("./petugas")(sequelize,Sequelize)
db.rak = require("./rak_buku")(sequelize,Sequelize)

db.anggota.belongsToMany(db.petugas, {
    through: db.peminjaman,
    foreignKey: {name: "angggota_id"},
})

db.petugas.belongsToMany(db.anggota, {
    through: db.peminjaman,
    foreignKey: {
        name: "petugas_id",
    }
})

db.buku.hasMany(db.peminjaman, {
    foreignKey: {
        name: "buku_id",
    }
})  

db.peminjaman.belongsTo(db.buku)

module.exports = db;

