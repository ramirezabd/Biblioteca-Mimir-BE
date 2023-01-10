const { anggota, petugas, buku, peminjaman, pengembalian, sequelize } = require("../../cl_1/models")

const pinjamBuku = async (req, res) => {
    console.log(" ")

    try {
        const { idBuku, idAnggota, idPetugas, tglPinjam, } = req.body

        //pencarian ID buku berdasarkan ISBN
        const idBukuFinder = await buku.findAll({
            where: {
                isbn: req.body.idBuku
            }
        });
        console.log(" ")

        //pencarian ID Petugas berdasarkan namanya
        //note: mestinya di model ditambahkan id/kode khusus per individual petugas
        const idPetugasFinder = await petugas.findAll({
            where: {
                namaPetugas: req.body.idPetugas
            }
        });
        console.log(" ")

        //pencarian Id Anggota peminjam berdasarkan nama
        //note: sama seperti note idPetugasFinder
        const idAnggotaFinder = await anggota.findAll({
            where: {
                username: req.body.idAnggota
            }
        });
        console.log(" ")

        // if (idBukuFinder === null) {
        //     res.status(400).json(
        //         { msg: "id Buku ditemukan" }
        //     );
        // } else if (idPetugasFinder === null) {
        //     res.status(400).json(
        //         { msg: "id Petugas tidak ditemukan" }
        //     );
        // } else {
        //     res.status(400).json(
        //         { msg: "id Anggota tidak ditemukan" }
        //     );
        // }

        const idBukuPrac = idBukuFinder[0].id;
        const idAnggotaPrac = idAnggotaFinder[0].id;
        const idPetugasPrac = idPetugasFinder[0].id;
        const tanggalPeminjamanPrac = tglPinjam[0].tanggalPeminjaman;
        const dendaPrac = 5000;

        await peminjaman.create({
            idBuku: idBukuPrac,
            idAnggota: idAnggotaPrac,
            idPetugas: idPetugasPrac,
            tanggalPeminjaman: tglPinjam,
            denda: dendaPrac,
        })
            //.then untuk memanggil 2 argumen
            .then(result => res.status(200).json({
                msg: "Peminjaman berhasil, selamat membaca!",
                data: result
            }))
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            msg: "Proses peminjaman error"
        })
    }
}

const pengembalianBuku = async (req, res) => {
    console.log(" ")

    try {
        const { idBuku, idAnggota, idPetugas, tanggalPeminjaman, tanggalPengembalian, tanggalKembali } = req.body

        //pencarian ID buku berdasarkan ISBN
        const idBukuFinder = await buku.findAll({
            where: {
                isbn: req.body.idBuku
            }
        });
        console.log(" ")

        //pencarian ID Petugas berdasarkan namanya
        //note: mestinya di model ditambahkan id/kode khusus per individual petugas
        const idPetugasFinder = await petugas.findAll({
            where: {
                namaPetugas: req.body.idPetugas
            }
        });
        console.log(" ")

        //pencarian Id Anggota peminjam berdasarkan nama
        //note: sama seperti note idPetugasFinder
        const idAnggotaFinder = await anggota.findAll({
            where: {
                username: req.body.idAnggota
            }
        });
        console.log(" ")

        // if (idBukuFinder === null) {
        //     res.status(400).json(
        //         { msg: "id Buku ditemukan" }
        //     );
        // } else if (idPetugasFinder === null) {
        //     res.status(400).json(
        //         { msg: "id Petugas tidak ditemukan" }
        //     );
        // } else {
        //     res.status(400).json(
        //         { msg: "id Anggota tidak ditemukan" }
        //     );
        // }

        const idBukuPrac = idBukuFinder[0].id;
        const idAnggotaPrac = idAnggotaFinder[0].id;
        const idPetugasPrac = idPetugasFinder[0].id;

        await pengembalian.create({
            idBuku: idBukuPrac,
            idAnggota: idAnggotaPrac,
            idPetugas: idPetugasPrac,
            tanggalPeminjaman: tanggalPeminjaman,
            tanggalPengembalian: tanggalPengembalian,
            tanggalKembali: tanggalKembali
        })
            //.then untuk memanggil 2 argumen
            .then(result => res.status(200).json({
                msg: "Pengembalian berhasil, selamat membaca!",
                data: result
            }))
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            msg: "Proses peminjaman error"
        })
    }
}

const lihatPeminjaman = async (req, res) => {
    peminjaman.findAll(
        // {
        //     include: {
        //         model: anggota
        //     }
        // }
    )
        .then(hasil => res.status(200).json({
            msg: "Peminjaman berhasil, selamat membaca!",
            data: hasil
        }))
}

module.exports = { pinjamBuku, pengembalianBuku, lihatPeminjaman }