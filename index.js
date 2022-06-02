const express = require("express");
const cors = require("cors");
const app = express()

app.use(express.json());
app.use(cors());

const db = require("./models");

//Static image folder
app.use("/Images", express.static('./Images'));
//Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

const TeacherPost = require('./routes/T_Posts');
app.use("/t_posts", TeacherPost);

const UserPost = require('./routes/Users');
app.use("/auth", UserPost);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
    
});


