const { anggota, petugas, buku, rak_buku, sequelize } = require("../../cl_1/models")

const cariAnggota = (req, res) => {
   anggota.findAll(
      // {limit:2}
      {
         attributes:
            ["namaAnggota", "jurusanAnggota", "kelasAnggota"]
      }
   )
      .then(hasil => {
         res.json(hasil)
      })
      .catch(err => console.error(err))
}

const isiAnggota = (req, res) => {
   const ruleAnggota = {
      username: req.body.username,
      password: req.body.password,
      namaAnggota: req.body.namaAnggota,
      jurusanAnggota: req.body.jurusanAnggota,
      kelasAnggota: req.body.kelasAnggota,
      nomorTelepon: req.body.nomorTelepon,
      alamat: req.body.alamat,
   }

   // const { username, password, namaAnggota, jurusanAnggota, kelasAnggota, nomorTelepon, alamat} = req.body;

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
         res.send(hasil).json
      })
      .catch(err => console.error(err))
}

const isiPetugas = (req, res) => {
   const rulePetugas = {
      namaPetugas: req.body.namaPetugas,
      jabatan: req.body.jabatan,
      nomorTele: req.body.nomorTele,
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

const kategori = async (req, res) => {
   anggota.findAll({
      attributes: ["namaAnggota", "alamat",
         // [
         //    sequelize.fn("COUNT", sequelize.col("jurusanAnggota")), "jurusan"
         // ]
      ]
   })
      .then(hasil => {
         res.send(hasil)
      })
      .catch(err => console.error(err))
}

const minjem = async (req, res) => {
   const abc = 1;
   anggota.findAll({
      where: {
         id: abc
      },
      attributes: { exclude: ["username", "password", "createdAt", "updatedAt"] }
   })
      .then(hasil => {
         res.json(hasil)
      })
      .catch(err => console.error(err))
}

const isiRak = async (req, res) => {
   // const idBuku = 
   const ruleRak = {
      namaRak: req.body.namaRak,
      lokasi: req.body.lokasi ? req.body.lokasi : "unknown",
      idBuku: req.body.idBuku ? req.body.idBuku : 1
   };

   rak_buku.create(ruleRak)
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

//tama punya
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

module.exports = { cariAnggota, isiAnggota, cariBuku, isiBuku, cariPetugas, isiPetugas, pinjol, kategori, minjem, isiRak }