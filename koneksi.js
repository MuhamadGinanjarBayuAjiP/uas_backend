const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('db_universitas_200101078', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    sequelize.sync({alter: true});
    console.log('Koneksi Berhasil!.');
} catch (error) {
    console.error('Koneksi Gagal!', error);
}

module.exports = sequelize;
