import { Router } from "express";
import {anggota} from "../controllers";
const routes = Router()

routes.get("get",anggota)

export default routes