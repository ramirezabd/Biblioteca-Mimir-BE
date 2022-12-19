'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('anggota', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      nama_anggota: {
        type: Sequelize.STRING
      },
      Jurusan_anggota: {
        type: Sequelize.STRING
      },
      kelas_anggota: {
        type: Sequelize.INTEGER
      },
      nomor_telepon_anggota: {
        type: Sequelize.INTEGER
      },
      alamat_anggota: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('anggota');
  }
};