
const authService = require("../../service/admin/authentication/authenticationService");

function verifyLogIn (req, res, next){
    var token = req.cookies.token;
    const tokenVerify = authService.verifyToken(token);
    if(tokenVerify){
        req.user = tokenVerify;
        next()
    }else{
        res.render("admin/main/login",{ title: 'Log In',layout:'./admin/layouts/containerLogin'});
    }
  }

function verifyAdmin (req, res, next) {
    if (req.user.role == 'admin') {
        next();
    } else {
        res.send('not permisson')
    }
  }

module.exports = {
    verifyLogIn: verifyLogIn,
    verifyAdmin: verifyAdmin
}