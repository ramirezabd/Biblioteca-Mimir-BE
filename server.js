const express = require("express");
const cors = require("cors");
const multer = require("multer");
const cookieparser = require('cookie-parser');
const path = require("path")
const dotenv = require("dotenv")
dotenv.config();

const port = 8000;

const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieparser())
app.use(express.json());
const routes = require("./src/routes/data");

console.log("Bakal muncul setiap saat")

const lokasi = path.dirname(__filename);

const imgStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, `Original-${file.originalname}`)
    }
})

const imgFilter = (res, req, cb) => {
    const ImgStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "images")
        },
        filename: (req, file, cb) => {
            cb(null, `Original-${file.originalname}`)
        }
    })
}

app.use(multer({
    storage: imgStorage,
    fileFilter: imgFilter
}
).single("gambar"));

app.use("/images", express.static(path.join(lokasi, "images")));

app.use(routes);

app.listen(port, () => console.log(`Server berjalan di http://localhost:` + port));


