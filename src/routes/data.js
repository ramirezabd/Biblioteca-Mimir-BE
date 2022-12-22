const { Router } = require("express");
// import {anggota} from "../controllers";
const { cariAnggota, isiAnggota, cariBuku, isiBuku, cariPetugas, isiPetugas } = require("../controllers/ctr")
const routes = Router()

routes.get("/cmember",cariAnggota),
routes.post("/imember", isiAnggota),
routes.get("/cbuku",cariBuku),
routes.post("/ibuku", isiBuku),
routes.get("/cstaff",cariPetugas),
routes.post("/istaff", isiPetugas),

module.exports = routes;