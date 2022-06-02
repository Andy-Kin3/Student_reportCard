const express = require('express');
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");

const {sign} = require('jsonwebtoken');


router.post("/", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, 10).then((hash) => {
        User.create({
            email:email,
            password:hash
        });
        res.json("SUCCESS"); 
    });
});

router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({where: {email:email}});

    if(!user) res.json({error: "User Doesn't Exist"});

    bcrypt.compare(password, user.password).then((match) => {
        if(!match) res.json({error: "Wrong Username or Password"});

        const accessToken = sign({email: user.email, id: user.id}, "Dgbrudhclw");
        res.json(accessToken);
        });
    });


module.exports = router;