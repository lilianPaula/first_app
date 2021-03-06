const express = require("express");
const router = express.Router();
const app = express();
const faker = require("faker");


//router.use(express.static('public'));


router.get('/',(req,res)=>{
    res.render('pages/home');
    
});

router.get('/about',(req,res)=>{

    res.render('pages/about');
});
router.get('/cadastro',(req,res)=>{

    res.render('pages/cadastro');
});

router.post('/cadastro/remove',(req,res)=>{
    let usuario={name: "wellington", email: "wwagner@virtual.ufc.br"};
    /* for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.name.findName(),email: faker.internet.email(),avatar: faker.image.image()});
    } */

    let result = db.inserirDado(usuario);
    console.log(result);
    //res.render('pages/insert',{result});
});

router.get('/cadastro',(req,res)=>{
  
    res.render('pages/cadastro');
});

router.get('/cadastro/insert',(req,res)=>{
    let usuario={name: "wellington", email: "wwagner@virtual.ufc.br"};
    /*for(let cont=1;cont<=6;cont++)
    { usuarios.push({name:faker.name.findName(),email: faker.internet.email(),avatar: faker.image.image()});
    */
    

    //let result = db.inserirDado(usuario);
    console.log(result);
   res.render('pages/insert',{result});
});

router.get('/cadastro/list',(req,res)=>{

});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router;
