const {Sequelize, DataTypes} = require('sequelize');
var koneksi = require("../koneksi.js");

const mahasiswa = koneksi.define('mahasiswa', {
    nim: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {freezeTableName: true});

module.exports = mahasiswa;
