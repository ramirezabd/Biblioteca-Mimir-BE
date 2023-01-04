const dotenv = require("dotenv")
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const cookieparser = require('cookie-parser');
const path = require("path")


const routes = require("./src/routes/data");
const port = 4050;
dotenv.config();

const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:4050' }));
app.use(cookieparser())
app.use(express.json());



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
).single("ppBeeg"));

app.use("/images", express.static(path.join(lokasi, "images")));

app.use(routes);

// db.sequelize.sync({
//     force: true
// }).then(() => {
//     console.log("The Database has been dropped and re-sync")
//  });

//  db.sequelize.sync().then(() => {
//     console.log("The Database has been updated and re-sync")
//  });

app.listen(port, () => console.log(`Server berjalan di http://localhost:` + port));


