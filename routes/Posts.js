const express = require('express');
const router = express.Router();
const { Student } = require("../models");
const insertImages = require("../controllers/insertImage.js");
const bcrypt = require("bcrypt");

// const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '../Images');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now().toString() + path.extname(file.originalname));
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: {fileSize: '70000000000'},
//     fileFilter: (req, file, cb) => {
//         const fileType = /jpeg|jpg|png|gif/;
//         const mimetype = fileType.test(file.mimetype);
//         const extname = fileType.test(path.extname(file.originalname));
        
//         if(mimetype && extname){
//             return cb(null, true);
//         }
//         cb("Give proper file format to upload");
//     }
// }).single('image');


router.get("/", async (req, res) => {
    const listOfPosts = await Student.findAll();
    res.json(listOfPosts);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const post = await Student.findByPk(id);
    res.json(post);
});

router.post("/", insertImages, async (req, res) => {
    const firstName =req.body.lastName;
    const lastName =req.body.firstName;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    const classroom = req.body.classroom;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const image = req.file.path;
    const sex = req.body.sex;

    // insertImages(req, res, (err) => {
    //     if(err){
    //         res.render('index', {
    //             msg: err
    //         });
    //     }else{
    //         console.log(req.file);
    //         res.send('file Done');
    //     }
    // });

    bcrypt.hash(password, 10).then((hash) => {
        User.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hash,
            age:age,
            classroom:classroom,
            phone:phone,
            subject:subject,
            image:image,
            sex:sex
        });
        res.json("SUCCESS"); 
    });
    const post = {firstName, lastName, email, password, age, classroom, phone, subject, image, sex}
    await Student.create(post);
    res.json(post);

    router.post("/login", async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        const user = await Student.findOne({where: {email:email}});

        if(!user) res.json({error: "User Doesn't Exist"});

        bcrypt.compare(password, user.password).then((match) => {
            if(!match) res.json({error: "Wrong Username or Password"});

            const accessToken = sign({email: user.email, id: user.id}, "Dgbrudhclw");
            res.json(accessToken);
            });
        });
});


module.exports = router;