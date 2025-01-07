const express = require('express');
const app =express();

app.get('/',(req,res)=>{
    console.log("hi");
    res.send("hello world");
});

const user=require('./Routing/Route')
app.use('/user',user);

app.listen(3000);