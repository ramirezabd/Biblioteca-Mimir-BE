'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rak_buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rak_buku.belongsTo(models.buku,{
        foreignKey: "idBuku",
      })
    }
  }
  rak_buku.init({
    namaRak: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    idBuku: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'rak_buku',
    modelName: 'rak_buku',
  });
  return rak_buku;
};