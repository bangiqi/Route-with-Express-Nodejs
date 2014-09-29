// server.js

// Base setup

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var router = express.Router();


app.route('/login')

    .get(function(req, res) {
        res.send('this is login form');
    })

    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form');
    });


//route middleware to validate :name

router.param('name', function(req, res, next, name){

    //cek log
    console.log('doing name validation on '+ name);

    // sekali validasi
    req.name = name;

    next();

});

router.use(function(req, res, next){

    //log each request to the console

    console.log(req.method, req.url);

    //continue
    next();


});

app.get('/sample', function(req, res){

    res.send('this is a sample');

});

//home page route (http://localhost:8080)

router.get('/', function(req, res){

    res.send('im the home page!');

})

//about page

router.get('/about', function(req, res){

    res.send('im at about page !');

});

//profile page

router.get('/profile', function(req, res){

    res.send('im at profile page !');

});

//route with parameter

router.get('/hello/:name', function(req, res){

    res.send('hello ' + req.params.name + '!');

});


//route yang digunakan untuk aplikasi
app.use('/app', router);


app.listen(port);
console.log('magic happens on port ' + port);

/*
var http = require('http');

var server = http.createServer(function(req, res){

    res.writeHead(200);
    res.end('Hello http');

});

server.listen(8080);

*/