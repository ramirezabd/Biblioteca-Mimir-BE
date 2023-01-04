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
      idBuku: {
        type: Sequelize.INTEGER,
        references: {
          model: "buku",
          key: "id"
        }
      },
      idAnggota: {
        type: Sequelize.INTEGER,
        references: {
          model: "anggota",
          key: "id"
        }
      },
      idPetugas: {
        type: Sequelize.INTEGER,
        references: {
          model: "petugas",
          key: "id"
        }
      },
      tanggalPengembalian: {
        type: Sequelize.DATE
      },
      tanggalPeminjaman: {
        type: Sequelize.DATE
      },
      tanggalKembali: {
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