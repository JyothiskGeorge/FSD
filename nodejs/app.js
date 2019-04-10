const express=require('express');
const exphand=require('express-handlebars');
var app=express();

app.engine('handlebars',exphand({defaultLayout:'masterpage'}));
app.set('view engine','handlebars');

app.use(express.static('views/static'));
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.get('/gallery',(req,res)=>{
    res.render('gallery');
});

app.listen(5000);
