'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // petugas.hasMany(models.peminjaman,{
      //   foreignKey: "idPetugas",
      // });
      // models.peminjaman.belongsTo(petugas);

      // petugas.hasMany(models.pengembalian,{
      //   foreignKey: "idPetugas",
      // });
      // models.pengembalian.belongsTo(petugas);
    }
  }
  petugas.init({
    namaPetugas: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    nomorTelepon: DataTypes.INTEGER,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'petugas',
    modelName: 'petugas',
  });
  return petugas;
};