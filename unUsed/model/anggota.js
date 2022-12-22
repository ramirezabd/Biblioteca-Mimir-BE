module.exports = (sequelize, DataTypes) => {
  const Anggota = sequelize.define("Anggota", {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    nama_anggota: {
      type: DataTypes.STRING,
    },
    Jurusan_anggota: {
      type: DataTypes.STRING,
    },
    kelas_anggota: {
      type: DataTypes.INTEGER,
    },
    nomor_telepon_anggota: {
      type: DataTypes.INTEGER,
    },
    alamat_anggota: {
      type: DataTypes.STRING,
    },
  },{
    freezeTableName: true,
  })

  return Anggota
}