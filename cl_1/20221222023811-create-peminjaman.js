'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peminjaman', {
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
          key: "id",
        //   as:"idBuku",
        }
      },
      idAnggota: {
        type: Sequelize.INTEGER,
        references: {
          model: "anggota",
          key: "id",
        //   as: "idAnggota",
        }
      },
      idPetugas: {
        type: Sequelize.INTEGER,
        references: {
          // model: "petugas",
          // key: "id",
        }
      },
      tanggalPeminjaman: {
        type: Sequelize.DATE
      },
      denda: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('peminjaman');
  }
};