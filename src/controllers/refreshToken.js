const { anggota, petugas } = require("../../cl_1/models")
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);
        const anggota = await anggota.findAll({
            where: {
                refresh_token: refreshToken
            }
        });
        
        if (!anggota[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            const userId = anggota[0].id;
            const namaAnggota = anggota[0].namaAnggota;
            const username = anggota[0].username;

            const accessToken = jwt.sign({ userId, namaAnggota, username }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { refreshToken }