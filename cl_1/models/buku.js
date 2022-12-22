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
      // define association here
      // buku.hasMany(models.peminjaman,{
      //   foreignKey: "idBuku",
      // });
      // models.peminjaman.belongsTo(buku);

      // buku.hasMany(models.pengembalian,{
      //   foreignKey: "idBuku",
      // });
      // models.pengembalian.belongsTo(buku);

      // buku.hasMany(models.rak_buku,{
      //   foreignKey: "idBuku",
      // });
      // models.rak_buku.belongsTo(buku);

      // buku.belongsTo
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