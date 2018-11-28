const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send("HomePage");
});

app.get('/help',(req,res) => { 
    res.send("Help page")
});
app.get('/contact', (req, res) =>{
    res.send("Contact Me");
});



app.listen(3000);


