const express = require('express');
const app = express();
var path = require('path');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) =>{
   
    
    res.render('home.pug')
    
});



app.get('/maps',(req,res) => { 
    // res.send("Help page")
    res.render('maps.pug')
    // res.sendFile(path.join(__dirname + '/views/help.html'));
});
app.get('/youtube', (req, res) =>{
    // res.send("Contact Me");
    // res.sendFile(path.join(__dirname + '/views/contactUs.html'));
    res.render('youtube.pug')
});

app.get('/url', (req,res) =>{
    res.render('url.pug')
});

app.listen(3000);






 


