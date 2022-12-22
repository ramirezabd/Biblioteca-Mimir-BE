'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anggota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  anggota.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    namaAnggota: DataTypes.STRING,
    jurusanAnggota: DataTypes.STRING,
    kelasAnggota: DataTypes.STRING,
    nomorTelepon: DataTypes.INTEGER,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    tableName: "anggota",
    modelName: "anggota",
  });
  return anggota;
};