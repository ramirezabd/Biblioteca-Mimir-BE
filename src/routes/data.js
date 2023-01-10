const { Router } = require("express");

const { Register, Login, Logout, getUsers } = require("../controllers/userToken")
const { refreshToken } = require("../controllers/refreshToken")
const { verifyToken } = require("../middleware/verifyToken")
const { pinjamBuku, pengembalianBuku, lihatPeminjaman } = require("../controllers/borrow")


const { cariAnggota, isiAnggota, cariBuku, isiBuku, cariPetugas, isiPetugas, pinjol, kategori, minjem, isiRak } = require("../controllers/ctr")
const routes = Router()

routes.get("/cmember", cariAnggota)
routes.post("/imember", isiAnggota)
routes.get("/cbuku", cariBuku)
routes.post("/ibuku", isiBuku)
routes.get("/cstaff", cariPetugas)
routes.post("/istaff", isiPetugas)
routes.post("/pinjol", pinjol)
routes.get("/kat", kategori)
routes.get("/minjem", minjem)
routes.post("/rak", isiRak)

routes.get('/users', verifyToken, getUsers);
routes.post('/users', Register);
routes.post('/login', Login);
routes.get('/token', refreshToken);
routes.delete('/logout', Logout);

routes.post('/pinjam', pinjamBuku)
routes.post('/pengambilan', pengembalianBuku)
module.exports = routes;