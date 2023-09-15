
var express = require('express')
var router = express.Router()
const authService = require("./service/admin/authentication/authenticationService");


router.use('/admin*',checkRouterAdminAuthenation);

function checkRouterAdminAuthenation (req, res, next) {
    if(_verifyLogIn(req, res, next))_verifyAdmin(req, res, next);
}

function _verifyLogIn (req, res, next){
    var token = req.cookies.token;
    const tokenVerify = authService.verifyToken(token);
    if(tokenVerify){
        req.user = tokenVerify;
        next()
    }else{
        res.render("admin/main/login",{ title: 'Log In',layout:'admin/layouts/containerLogin'});
    }
  }

function _verifyAdmin (req, res, next) {
    if (req.user.role == 'admin') {
        next();
    } else {
        res.send('not permisson')
    }
  }

module.exports = router