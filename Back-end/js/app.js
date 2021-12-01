"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var configuracion = {
    hostname: "127.0.0.1",
    port: 3001
};
var Client = require('pg').Client;
var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'salud',
    password: '1234',
    port: 5432
});
var Pool = require('pg').Pool;
var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'salud',
    password: '1234',
    port: 5432
});
client.connect();
var jsonParser = bodyParser.json();
app.use(cors());
app.get('/Sacar', function (req, res) {
    var listaUsuarios = new Array();
    client.query("SELECT * FROM \"usuarios\"", function (err, respuesta) {
        if (err) {
            console.error(err);
            return;
        }
        for (var _i = 0, _a = respuesta.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            listaUsuarios.push(row);
        }
        console.log(listaUsuarios);
        res.send(JSON.stringify({ "items": listaUsuarios }));
    });
});
app.post('/Insertar', bodyParser.json(), function (req, res) {
    pool.query("INSERT INTO \"usuarios\" (nombre, edad, correo, fechanac, sexo, estatura, peso, enfcardiaca, enfrespiratoria, cirugia, alergias, enfdegenerativa, cirugia2, futbol, baloncesto, voleibol, salsa, zumba, folklor) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19) RETURNING *), [req.body.nombre, req.body.edad, req.body.correo, req.body.fechaNac, req.body.sexo, req.body.estatura, req.body.peso, req.body.enfCardiaca, req.body.enfRespiratoria, req.body.cirugia, req.body.alergias, req.body.enfDegenerativas, req.body.cirugia2, req.body.futbol, req.body.baloncesto, req.body.voleibol, req.body.salsa, req.body.zumba, req.body.folklor]", function (err, respuesta) {
        if (err) {
            console.error(err);
            return;
        }
        else {
            console.log(respuesta.row[0].id);
            res.send(JSON.stringify({ "status": "ok", "item": respuesta.rows[0].id }));
        }
    });
});
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://" + configuracion.hostname + ":" + configuracion.port);
});
