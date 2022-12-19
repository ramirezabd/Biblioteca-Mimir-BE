module.exports = (sequelize, DataTypes) => {
  const Buku = sequelize.define("Buku", {
    isbn: {
      type: DataTypes.INTEGER,
    },
    judul_buku: {
      type: DataTypes.STRING,
    },
    penulis_buku: {
      type: DataTypes.STRING,
    },
    penerbit_buku: {
      type: DataTypes.STRING,
    },
    tahun_penerbit: {
      type: DataTypes.DATE,
    },
    sinopsis: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    },{
      freezeTableName: true,
    })
    
  return Buku
}