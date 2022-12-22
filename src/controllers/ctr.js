const { anggota, petugas, buku } = require("../../cl_1/models")

const cariAnggota = (req,res) => {
    anggota.findAll()
     .then(hasil => {
        res.send(hasil)
     })
     .catch(err => console.error(err))
}

const isiAnggota = (req, res) => {
   const ruleAnggota = {
      namaAnggota: req.body.namaAnggota,
      jurusanAnggota: req.body.jurusanAnggota,
      kelasAnggota: req.body.kelasAnggota,
      nomorTelepon: req.body.nomorTelepon,
      alamat: req.body.alamat,
   }

   anggota.create(ruleAnggota)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
         message:
            err.message || "terdapat kesalahan dalam penginputan"
      })
    })
}

const cariBuku = (req, res) => {
   buku.findAll()
   .then(hasil => {
      res.send(hasil)
   })
   .catch(err => console.error(err))
}

const isiBuku = (req, res) => {
   const ruleBuku = {
      isbn: req.body.isbn,
      judulBuku: req.body.judulBuku,
      penulis: req.body.penulis,
      penerbit: req.body.penerbit,
      tahunPenerbit: req.body.tahunPenerbit,
      sinopsis: req.body.sinopsis,
      stock: req.body.stock,
   };

   buku.create(ruleBuku)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
         message:
         err.message || "udah salah inimah"
      })
    })
}

const cariPetugas = (req, res) => {
   petugas.findAll()
    .then(hasil => {
      res.send(hasil)
    })
    .catch(err => console.error(err))
}

const isiPetugas = (req,res) => {
   const rulePetugas = {
      namaPetugas: req.body.namaPetugas,
      jabatan: req.body.jabatan,
      nomorTele: req.body.nomorTelepon,
      alamat: req.body.alamat
   };

   petugas.create(rulePetugas)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
         message:
         err.message || "yah salah"
      })
    })
}

const pinjol = async (req, res) => {
   try {
      const act = await anggota.create(req.body)
      if (act) {
         res.json({
            message: "berhasil",
            data: act,
         })
      }
   } catch (err) {
      console.log(err)
   }
}

module.exports = { cariAnggota, isiAnggota, cariBuku, isiBuku, cariPetugas, isiPetugas}