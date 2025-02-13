const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const homeStartingContent = "This is a simple blog website where you can write your daily thoughts and share it with the world. You can also read other people's blogs and get inspired. You can also delete your blog if you want to. You can also read the full blog by clicking on the Read More button.";
const aboutContent = "This is a simple blog website where you can write your daily thoughts and share it with the world. You can also read other people's blogs and get inspired. You can also delete your blog if you want to. You can also read the full blog by clicking on the Read More button.";
const contactContent = "This is a simple blog website where you can write your daily thoughts and share it with the world. You can also read other people's blogs and get inspired. You can also delete your blog if you want to. You can also read the full blog by clicking on the Read More button.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home");
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});
