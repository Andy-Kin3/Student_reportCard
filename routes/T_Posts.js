const express = require('express');
const router = express.Router();
const { Teacher } = require("../models");

router.get("/", async (req, res) => {
    const listOfPosts = await Teacher.findAll();
    res.json(listOfPosts);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await Teacher.create(post);

    res.json(post);
});


module.exports = router;