const express = require("express"); 
const app = express(); 
const routes= require("./routes");
const expressLayouts = require("express-ejs-layouts");

//Ativando uso de EJS e Express-ejs-layouts

app.set('view engine', 'ejs');
app.use(expressLayouts);

//Crianção das rotas do arquivo routes.js

app.use('/',routes);

const port=3030;
const address="localhost";

//servidor para Node.js e Express

const server = app.listen(port,address,()=>{ 
    let host = server.address().address; 
    let port = server.address().port; 
    console.log(`Servidor executando no endereço ${host} e porta ${port}`); 
   });
