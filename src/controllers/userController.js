const fs = require("fs");
const path = require("path");
const users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/users.json"), "utf8")
);
const writeUsers = (data) => fs.writeFileSync(
    path.join(__dirname, "../data/users.json"), JSON.stringify(data), "utf8"
);
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");

module.exports = {
    index: (req, res) => {
        res.render("form");
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        req.session.usuario = req.body;

        res.locals.usuario = req.session.usuario;
        
        if (errors.isEmpty()){
            res.render('form', {
                session: req.session
            })
        }else{

        }
    },
    confirm: (req, res) => {

    }
}