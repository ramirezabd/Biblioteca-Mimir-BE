const { anggota, petugas } = require("../../cl_1/models")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const getUsers = async (req, res) => {
    try {
        const anggota = await anggota.findAll({
            attributes: ['id', 'namaAnggota', 'username']
        });
        res.json(anggota);
    } catch (error) {
        console.log(error);
    }
}

const Register = async (req, res) => {
    const { username, namaAnggota, password, confPassword } = req.body;
    if (password !== confPassword)
        return res.status(400).json(
            { msg: "Password dan Confirm Password tidak cocok" }
        );

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await anggota.create({
            namaAnggota: namaAnggota,
            username: username,
            password: hashPassword,
        });
        res.json({ msg: "Register Berhasil" });
    } catch (error) {
        console.log(error);
    }
}

const Login = async (req, res) => {
    try {
        console.log(" ")
        const user = await anggota.findAll({
            where: {
                username: req.body.username
            }
        });

        console.log(user)

        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({ msg: "passwordnya salah mang" });


        console.log(" ");
        console.log(`password pre: ` + req.body.password);
        console.log(`password post: ` + user[0].password)
        console.log(`is it match? ` + match)
        console.log(" ");


        const userId = user[0].id;
        const name = user[0].namaAnggota;
        const username = user[0].username;


        console.log(" ");
        console.log(`ID: ` + userId);
        console.log(`name: ` + name);
        console.log(`username: ` + username);
        console.log(" ")


        // const accessToken = jwt.sign({
        //     userId: anggota[0].id,
        //     name: anggota[0].namaAnggota,
        //     username: anggota[0].username
        // }, process.env.ACCESS_TOKEN_SECRET, {
        //     expiresIn: '20s'
        // });

        // const refreshToken = jwt.sign({ userId, name, username }, process.env.REFRESH_TOKEN_SECRET, {
        //     expiresIn: '1d'
        // });


        // console.log(" ")
        // console.log("kenapa ga keliatan access sama refreshnya")
        // console.log(`access token: ` + accessToken)
        // console.log(`refresh token: ` + refreshToken)
        // console.log(" ")


        // await anggota.update({ refresh_token: refreshToken }, {
        //     where: {
        //         id: userId
        //     }
        // });
        // res.cookie('refreshToken', refreshToken, {
        //     httpOnly: true,
        //     maxAge: 24 * 60 * 60 * 1000
        // });
        // res.json({ accessToken });

        console.log("Berhasil")
        
    } catch (error) {
        res.status(404).json({ msg: "username atau password tidak ditemukan" });
        console.log("Tidak ditemukan, tapi versi console")
    }
}

const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const anggota = await anggota.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!anggota[0]) return res.sendStatus(204);
    const userId = anggota[0].id;
    await anggota.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

module.exports = { getUsers, Register, Login, Logout }