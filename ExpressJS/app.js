const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressValidator = require('express-validator');
const mongojs = require('mongojs');
const app = express();
const ObjectId = mongojs.ObjectId;
const db = mongojs('customerapp', ['users'])

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware for bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set static path
app.use(express.static(path.join(__dirname, 'public')))

//Global variables
app.use((req, res, next) => {
    res.locals.errors = null;
    next();
});

app.use(expressValidator());


//send data to route
app.get('/', (req, res) => {
    db.users.find((err, data) => {
        res.render('index', {
            title: 'customers',
            users: data,
        });
    });
});

app.post('/', (req, res) => {
    req.checkBody('first_name', 'First name is required').notEmpty();
    req.checkBody('last_name', 'Last name is required').notEmpty();
    req.checkBody('email', 'email is required').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        db.users.find( (err, users) => {
            res.render("index", {
                title: "Customers",
                users: users,
                errors: errors
            });
        });
    } else {
        const newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        };
        db.users.insert(newUser);
        res.redirect('/');
    }
});

app.delete('/users/delete/:id', (req, res) => {
    db.users.remove({ _id: ObjectId(req.params.id) });
    res.redirect('/')
});

app.listen(3000, () => console.log("server started "));