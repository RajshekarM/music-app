import dotnev from 'dotenv';
import express from 'express';
import  request  from 'request';

//configuring environment variables
dotnev.config();


//this will create the server and start the server
const app = express();
const PORT = 8080;

console.log(process.env.CLIENT_ID);

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

