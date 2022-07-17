var express = require('express');
var router = express.Router();
var mahasiswa = require("../models/mahasiswa");

router.get('/', function (req, res, next) {
    mahasiswa.findAndCountAll().then(data => {
        res.json({ status: true, pesan: "Berhasil Ditampilkan", data: data.rows });
    }).catch(error => {
        res.json({
            status: false,
            pesan: "Error: " + error.message,
            data: []
        });
    })
});

router.post("/", function (req, res, next) {
    mahasiswa.create({ nim: req.body.nim, nama: req.body.nama, alamat: req.body.alamat, jenis_kelamin: req.body.jenis_kelamin }).then(data => {
        res.json({ status: true, pesan: "Berhasil Ditambahkan", data: data });
    }).catch(error => {
        res.json({
            status: false,
            pesan: "Error: " + error.message,
            data: null
        });
    })
});

router.put("/:nim", function (req, res, next) {
    mahasiswa.findOne({ where: { nim: req.params.nim } }).then((data) => {
        if (data == null)
            res.json({
                status: false,
                pesan: "Tidak Ditemukan",
                data: null,
            });
        else
            data.update({ nama: req.body.nama, alamat: req.body.alamat, jenis_kelamin: req.body.jenis_kelamin }).then(data => {
                res.json({ status: true, pesan: "Berhasil Diubah", data: data });
            }).catch((error) => {
                res.json({
                    status: false,
                    pesan: "Error: " + error.message,
                    data: null
                });
            });
    }).catch((error) => {
        res.json({
            status: false,
            pesan: "Error: " + error.message,
            data: null
        });
    });
});

router.delete("/:nim", function (req, res, next) {
    mahasiswa.findOne({ where: { nim: req.params.nim } }).then((data) => {
        if (data == null)
            res.json({
                status: false,
                pesan: "Tidak Ditemukan",
                data: null,
            });
        else
            data.destroy().then((data) => {
                res.json({
                    status: true,
                    pesan: "Berhasil Dihapus",
                    data: data,
                });
            }).catch((error) => {
                res.json({
                    status: false,
                    pesan: "Error: " + error.message,
                    data: null
                });
            });
    }).catch((error) => {
        res.json({
            status: false,
            pesan: "Error: " + error.message,
            data: null
        });
    });
});

module.exports = router;
