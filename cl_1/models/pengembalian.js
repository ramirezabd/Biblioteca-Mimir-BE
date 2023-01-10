'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengembalian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pengembalian.belongsTo(models.anggota,{
        foreignKey: "idAnggota",
      });
      pengembalian.belongsTo(models.buku,{
        foreignKey: "idBuku",
      });
      pengembalian.belongsTo(models.petugas,{
        foreignKey: "idPetugas",
      });
    }
  }
  pengembalian.init({
    idBuku: DataTypes.INTEGER,
    idAnggota: DataTypes.INTEGER,
    idPetugas: DataTypes.INTEGER,
    tanggalPeminjaman: DataTypes.DATE,
    tanggalPengembalian: DataTypes.DATE,
    tanggalKembali: DataTypes.DATE
  }, {
    sequelize,
    tableName: 'pengembalian',
    modelName: 'pengembalian',
  });
  return pengembalian;
};