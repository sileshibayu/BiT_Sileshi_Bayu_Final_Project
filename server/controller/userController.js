
const connection = require('../models/db')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

function signup(req,res){
    const user={
        email: req.body.email,
        password: password.body.password
    }
}
exports.home = (req, res)=>{ 
    res.render('index',{layout: './layouts/main-layout'});
}
//create new user
exports.createUser = (req, res)=>{ 
    res.render('users/create-user',{title:'Add users',layout: './layouts/main-layout'});
}
exports.addUser = (req, res)=>{
    const {fname, lname, email, phone, password,repassword} = req.body;
    if(password !=repassword){
        console.log("password confirmation error");
    }else{
    console.log(`connected as ID ${connection.threadId}`);
    connection.query('SELECT email FROM user_login WHERE email=  ? ',[email],  (err, rows)=> {
        if(err) throw err
        if(rows.length>0){
            res.send("the user with this email has already exist");
        }else{
            connection.query('INSERT INTO user_login SET fname =?, lname = ?, email = ?, phone = ?, password = ?',[fname, lname, email, phone, password], (err, rows)=>{
                if(err) throw err; // db not connected
                if(!err){
                    res.redirect('user/login');
                }else{
                    console.log(err);
                }
            })
    }
})
}
}
//login page
exports.login = (req, res)=>{ 
    res.render('users/login',{title:'login',layout: './layouts/main-layout'});
}
exports.logged = (req, res)=>{ 
    var email=req.body.email;
    var password=req.body.password;
    connection.query('SELECT * FROM user_login WHERE email=  ? AND password = ?',[email, password],  (err, rows)=> {
        if(err) throw err
        if(rows.length>0){
            req.session.loggedinUser= true;
            req.session.email= email;
            res.render('index',{layout: './layouts/user-layout'});
        }else{
            res.render('users/login',{layout: './layouts/main-layout', alertMsg:"Your Email Address or password is wrong"});
        }
        
    })
}
exports.homelog = (req, res)=>{ 
    var email=req.body.email;
    var password=req.body.password;
    connection.query('SELECT * FROM user_login WHERE email=  ? AND password = ?',[email, password],  (err, rows)=> {
        if(err) throw err
        if(rows.length>0){
            req.session.loggedinUser= true;
            req.session.email= email;
            res.render('index',{layout: './layouts/user-layout'});
        }else{
            res.render('users/login',{layout: './layouts/main-layout', alertMsg:"Your Email Address or password is wrong"});
        }
        
    })
    
}
exports.homeUser = (req, res)=>{ 
    if (req.session.loggedin) {
         
        res.render('index', {
            title:"Dashboard",
            email: req.session.email,     
        });
 
    } else {
 
        req.flash('success', 'Please login first!');
        res.redirect('users/login');
    }
}
//logout
exports.logout = (req, res)=>{ 
    req.session.destroy();
    req.flash('success', 'Login Again Here');
    res.redirect('users/login');
}
//forgot password
exports.change_pass = (req, res)=>{ 
    res.render('users/change-password',{title:'change password',layout: './layouts/user-layout'});
}
