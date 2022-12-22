import {anggota, buku, petugas, rak_buku, peminjaman, pengembalian} from "../../cl_1/models/"

module.exports.anggota = (req,res) => {
    anggota.findAll()
     .then(hasil => {
        res.send(hasil)
     })
     .catch(err => console.error(err))
}