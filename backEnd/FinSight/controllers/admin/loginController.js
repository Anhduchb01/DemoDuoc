const express = require("express");
var router = express.Router();
const authService = require("../../service/admin/authentication/authenticationService");
const contactService = require("../../service/admin/contact/contactService");

// router login
router.get("/admin/login", (req, res) => {
    res.render("admin/main/login",{ title: 'Log In',layout:'./admin/layouts/containerLogin' });
})

// router check login
router.post("/post-login", async (req, res) => {
    var username = authService.Sanitizing(req.body.username);
    var password = authService.Sanitizing(req.body.password);
    var user = await authService.findUserByUserNameOrEmail(username);
    if(!user) return res.status(201).json({success:false,message:'Username is not exits'});
    const isPasswordValid = await authService.comparePassword(password, user.password);
    if (!isPasswordValid) return res.status(201).json({success:false,message:'Password is not correct'});
    data = {_id: user._id,role: user.role}
    var token = authService.generateToken(data);
    if (user.role == 'admin') {
        return res.status(201).json({
            role: 'admin',
            token: token,
            username:user.username,
            success:true,
            message:""
        })
    } else {
        return res.status(201).json({
            role: 'customer',
            success:true,
            message:""
        })
    }
});

// rounter reset password
router.get("/admin/forgot-password", (req, res) => {
    res.render("admin/main/pass_recovery",{ title: 'Recovery Password',layout:'./admin/layouts/containerLogin'});
})
//router send reset password link
router.get("/admin/reset-password/:token", (req, res) => {
    var token = req.params.token;
    const tokenVerify = authService.verifyToken(token);
    if(tokenVerify){
        res.render("admin/main/new-password",{ title: 'Reset Password',layout:'./admin/layouts/containerLogin'});
    }else{
        return res.json('not found');
    }
})
//router submit new password
router.post("/admin/submit-password/:token", async (req, res) => {
    var token = req.params.token;
    var newPassword = req.body.password;

    const tokenVerify = authService.verifyToken(token);
    if(tokenVerify){
        const id = tokenVerify._id;
        const hashNewPassword = authService.hashPassword(newPassword);
        const user = authService.updatePasswordUser(id,hashNewPassword);
        if(user) {
            return res.status(201).json({success:true,message:'Your password has been changed successfully'});
        }else{
            return res.status(201).json({success:false,message:'Something is wrong'});
        }
    }else{
        return res.status(201).json({success:false,message:'You just have 1 minus to change the password'});
    }
});
//router check email to send reset password mail
router.post("/get-email-reset", async (req, res) => {
    var email = authService.Sanitizing(req.body.email);
    const user =await authService.findUserByEmail(email);
    if(user){
        data = {_id: user._id}
        var token = authService.generateToken(data,'59s');
        var Url = `${req.protocol}://${req.get("host")}`;
        content = `
        <div style="margin:0;padding:0">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody><tr>
                <td bgcolor="#ffffff">
                    <div align="center" style="padding:0px 15px 0px 15px">
                        <table border="0" cellpadding="0" cellspacing="0" width="500">                   
                            <tbody><tr>
                                <td style="padding:30px 0px 0px 0px">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody><tr>
                                            <td bgcolor="#ffffff" width="100" align="center"><a style="text-decoration: none;" href="https://waterportal.sinka.vn/">
                                            <h2 style="color:black;margin: 0px;font-size: 60px;letter-spacing: -.030em;font-family: Inter,sans-serif;font-weight: 700;" class="front-promo__title">
                                            Water <span class="color--green" style="color:#00997d">Portal</span>
                                            </h2>
                                            </a></td>
                                        </tr>
                                    </tbody></table>
                                </td>
                            </tr>
                        </tbody></table>
                    </div>
                </td>
            </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody><tr>
                <td bgcolor="#ffffff" align="center" style="padding:10px 15px 20px 15px">
                    <table border="0" cellpadding="0" cellspacing="0" width="500">
                        <tbody><tr>
                            <td>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tbody><tr>
                                        <td>                                                
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tbody><tr>
                                                    <td align="center" style="font-size:20px;font-family:Helvetica,Arial,sans-serif;font-weight:bold;color:#333333;">Recover your username and password</td>
                                                </tr>
                                                <tr>
                                                    <td align="center" style="padding:10px 0 0 0;font-size:13px;line-height:18px;font-family:Helvetica,Arial,sans-serif;color:#666666">Your username is ${user.username}</td>
                                                </tr>
                                            </tbody></table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>                                                
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tbody><tr>
                                                    <td align="center" style="padding:25px 0 0 0">
                                                        <table border="0" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                            <div style="text-align:center;margin-bottom:25px"><a href="${Url}/admin/reset-password/${token}" style="font-size:15px;line-height:1.4;border-radius:3px;display:inline-block;outline:0;padding:15px 20px;text-align:center;text-decoration:none;background-color:#168de9;color:#fff;padding:15px 25px">Reset Password</a></div>
                                                            <tr>
                                                                <td align="center" style="padding:10px 0 0 0;font-size:13px;line-height:18px;font-family:Helvetica,Arial,sans-serif;color:#666666">If you did not request to reset your password please ignore this email.</td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody><tr>
                <td bgcolor="#ffffff" align="center">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                        <tbody><tr>
                            <td >
                                <table width="500" border="0" cellspacing="0" cellpadding="0" align="center">
                                    <tbody><tr>
                                        <td align="center" valign="middle" style="font-size:12px;line-height:18px;font-family:Helvetica,Arial,sans-serif;color:#8b8b8b">
                                            <span class="m_2151027884290841168appleFooter" style="color:#8b8b8b">
                                              
                                              <p>If you have any questions, please contact sinkavietnam@gmail.com for support</p>
                                              
                                                © 2021 Water Portal. 345-1056, Kamikoshien, Nishinomiya-shi, Tokyo, N2L 0J6
                                            </span>
                                    </td></tr>
                                </tbody></table>
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
        </tbody></table><div class="yj6qo"></div><div class="adL">            
        </div></div>
                  `;
        var mainOptions = {
            from: "Water Portal",
            to: user.email,
            subject: "Reset Password",
            html: content,
        };
        const mail = await contactService.SendMail(mainOptions);
        if(mail){ 
            return res.status(201).json({success:true,message:'Send successfully ! Check your email to confirm'}); 
        }else{
            return res.status(201).json({success:false,message:'Server Error'}); 
        }
    }else{
        res.status(201).json({success:false,message:'Your email is not exit'}); 
    }
});


//// router register user
// router.post("/post-register", async (req, res) => {
//     var email = Sanitizing(req.body.email);
//     var username = Sanitizing(req.body.username);
//     var User = new user();
//     let usernameFound = await user.count({ $or: [{ username: username }, { email: username }] })
//     let emailFound = await user.count({ email: email })
//     if (usernameFound !== 0) return res.json("username already exits");
//     if (emailFound !== 0) return res.json("email already exits");

//     const hashPassword = bcrypt.hashSync(Sanitizing(req.body.password), 10);
//     let timeCreate = dayjs().format("YYYY/MM/DD HH:mm:ss");
//     User.username = username
//     User.password = hashPassword;
//     User.email = email;
//     User.timeCreate = timeCreate;
//     User.role = 'customer';

//     User.save()
//         .then((user) => {
//             return res.json("success")
//         })
//         .catch((error) => {
//             res.json('error')
//         });
    
// });

module.exports = router;