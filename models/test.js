    // test: DataTypes.STRING,
    // angka: DataTypes.INTEGER,
    // role: DataTypes.ENUM('Admin', 'Anggota')

module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define("Menu", {
    quantity: {
      type: DataTypes.INTEGER,
    },
    },{
      freezeTableName: true,
    })
    
  return Menu
}