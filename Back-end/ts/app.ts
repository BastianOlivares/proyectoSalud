import {Usuario} from './interface'

const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors');
const configuracion={
    hostname:"127.0.0.1",
    port: 3001
}

const {Client} = require('pg');
const client= new Client ({
    user:'postgres',
    host:'localhost',
    database:'salud',
    password:'1234',
    port: 5432
});

const Pool=require('pg').Pool;
const pool = new Pool( {
    user:'postgres',
    host:'localhost',
    database:'salud',
    password:'1234',
    port: 5432
})  

client.connect();

var jsonParser =bodyParser.json();
app.use(cors()); 

app.get('/Sacar', (req:any, res:any) => {
    let listaUsuarios=new Array<Usuario>();
    client.query(`SELECT * FROM "usuarios"`,(err:any, respuesta:any) => {
        if (err){
            console.error(err);
            return;
        }
        for(let row of respuesta.rows) {
            listaUsuarios.push(row);
        }
        console.log(listaUsuarios);
        res.send(JSON.stringify({"items":listaUsuarios}));
            
    })    
}) 

app.post('/Insertar', bodyParser.json(), (req:any, res:any) =>{
    pool.query(`INSERT INTO public.usuarios(nombre, edad, correo, fechanac, sexo, estatura, peso, enfcardiaca, enfrespiratoria, cirugia, alerigias, enfdegenerativa, cirugia2, futbol, baloncesto, voleibol, salsa, zumba, folklor)
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)`, (err:any, respuesta:any) => {
        if(err){
            console.error(err);
            return;
        }
        else {
            console.log(respuesta.row[0].id);
            res.send(JSON.stringify({"status":"ok","item":respuesta.rows[0].id}))
        }
    })
})


app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://${configuracion.hostname}:${configuracion.port}`)
})

