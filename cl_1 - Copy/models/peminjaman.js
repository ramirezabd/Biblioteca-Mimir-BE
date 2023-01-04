'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peminjaman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      peminjaman.belongsTo(models.anggota,{
        foreignKey: "idAnggota",
      });
      peminjaman.belongsTo(models.buku,{
        foreignKey: "idBuku",
      });
      peminjaman.belongsTo(models.petugas,{
        foreignKey: "idPetugas",
      })
    }
  }
  peminjaman.init({
    idBuku: DataTypes.INTEGER,
    idAnggota: DataTypes.INTEGER,
    idPetugas: DataTypes.INTEGER,
    tanggalPeminjaman: DataTypes.DATE,
    denda: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'peminjaman',
  });
  return peminjaman;
};