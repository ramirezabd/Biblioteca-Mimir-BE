'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  buku.init({
    isbn: DataTypes.STRING,
    judulBuku: DataTypes.STRING,
    penulis: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    tahunPenerbit: DataTypes.DATE,
    sinopsis: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'buku',
    modelName: 'buku',
  });
  return buku;
};