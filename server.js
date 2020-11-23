//importamos módulos que vamos a ir utilizando
const { Console } = require('console');
const { response } = require('express');
const express = require('express'); 
const path = require("path");
const db = require('./queries')

//iniciamos un servidor express
const app = express();

//usamos motor ejs
app.set("view engine", "ejs");


//especificamos que las views se guardan en la carpeta views mediante path
app.set("views", path.join(__dirname, "views"));

//lo mismo para public y css
app.use(express.static("public"));

//middleware configuration, para que requested.body funcione
app.use(express.urlencoded({ extended: false }))

//esperamos respuesta del puerto 8000
app.listen(8000, () => {
    console.log('Servidor 8000 iniciado');
});

//get: responde a la request que llega a la url del primer parámetro (req), y pasa a la funcion callback (res)
app.get("/", (req, res) => { 
    res.render("index");
});

app.get("/test", (req, res) => { 
    res.render("test");
});


app.get('/accx', db.getAccx)
app.get('/count', db.getCount)


