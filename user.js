// const express = require('express');
// let router = express.Router();

// const { Router } = require("express");

// router.get("/",(req,res)=>{
//     res.send("user information");
// })

// router.get("/newuser",(req, res)=>{
//     res.send("new user added");
// })


const express = require('express');
let router = express.Router();
router.route('/:id')
.get((req, res) => {
    res.send('Get a user with ID: ' + req.params.id);
}
)
.post((req, res) => {
    res.send('Add a user with ID: ' + req.params.id);
}
)
.put((req, res) => {
    res.send('Update a user with ID: ' + req.params.id);
}
)
.delete((req, res) => {
    res.send('Delete a user with ID: ' + req.params.id);
}
);

const user =[{name:"raja"},{name:"rani"},{name:"sepoy"}];

router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery = user[id]
    next();
})

module.exports = router;
