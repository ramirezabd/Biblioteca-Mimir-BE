'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pengembalian', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal_pengembalian: {
        type: Sequelize.DATE
      },
      id_buku: {
        type: Sequelize.INTEGER
      },
      id_anggota: {
        type: Sequelize.INTEGER
      },
      id_petugas: {
        type: Sequelize.INTEGER
      },
      tanggal_peminjaman: {
        type: Sequelize.DATE
      },
      tanggal_kembali: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('pengembalian');
  }
};