const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');

const homeStartingContent = `Horem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
const aboutContent = `Aorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
const contactContent = `Corem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

let posts = [];

app.get('/', function(req, res) {
    res.render('home', {startingContent: homeStartingContent, posts: posts,});
});

app.get('/about', function(req, res) {
    res.render('about', {aboutContent});
});

app.get('/contact', function(req, res) {
    res.render('contact', {contactContent});
});

app.get('/compose', function(req, res) {
    res.render('compose');
});

app.post('/compose', function(req, res) {
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody
    };

    posts.push(post);
    res.redirect('/');
});

app.get('/posts/:postName', function(req, res) {
    const requestedTitle =  _.kebabCase(req.params.postName);
    
    posts.forEach(function(post) {
        const storedTitle = _.kebabCase(post.title);
        
        if (requestedTitle === storedTitle) {
            res.render('post', {title: post.title, content: post.content });
        }
    });
});
app.listen(3000, function() {
    console.log('Server started on port 3000');
});
