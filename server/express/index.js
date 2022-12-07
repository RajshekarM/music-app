import express from 'express';
import  request  from 'request';

//this will create the server and start the server
const app = express();
const PORT = 8080;

app.get('/',(req,res)=>{res.send('hello working')});

app.get('/login',(req,res)=>{
    res.redirect();
})

app.get('/callback',(req,res)=>{

    request.post('url',(res,body)=>{

        res.redirect();

    });
    
})

app.listen(8080,console.log(`lsitening on PORT: ${PORT}`));

