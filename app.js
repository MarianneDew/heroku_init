const express=require("express");

const path=require('path');

const app= express();

const publicPath=path.resolve(__dirname,'./public');

app.use( express.static(publicPath) );

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'), ()=> {console.log('Servidor corriendo en el puerto' + app.get('port'));
});

app.get('/',(req, res)=>{
    let rutaIndex= path.resolve('./views/home.html');
    res.sendFile(rutaIndex);
});

app.get('/login', (req,res)=>{
    let rutaLogin= path.resolve('./views/login.html');
    res.sendFile(rutaLogin);
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
}); 