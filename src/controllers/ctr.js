const db = require("../model/indexModel");
const angggota = db.angggota;
const petugas =  db.petugas;
const buku = db.buku;

module.exports.cariAnggota = (req,res) => {
    db.anggota.findAll()
     .then(hasil => {
        res.send(hasil)
     })
     .catch(err => console.error(err))
}