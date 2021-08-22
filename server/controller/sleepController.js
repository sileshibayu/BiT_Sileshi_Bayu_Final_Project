var connection = require('../models/db')
//setting page
exports.setTime = (req, res)=>{ 
    
    connection.query('SELECT email FROM user_login ', (err, rows)=>{ 
        res.render('./setTime',{data:rows,layout: './layouts/user-layout'});
    })
    
}
exports.setSleep = (req, res)=>{ 
    const email = req.body.user_fname;
    var date_obj = new Date();
    var sleep_date = date_obj.getFullYear() + '-' +  ("0" + (date_obj.getMonth() + 1)).slice(-2) +'-'+ ("0" + date_obj.getDate()).slice(-2);
    var sleep_start = date_obj.getHours()+':'+date_obj.getMinutes()+':'+date_obj.getSeconds();
    
    connection.query('SELECT id FROM user_login WHERE email = ? ',[email], (err, rows)=>{
        
        var uid_idfk = rows[0].id;
        console.log(uid_idfk)
        connection.query('INSERT INTO sleep_entry SET date =?, start_time = ?, wakeup_time = ?, duration = ?, status1 = ?,status2 = ?, remark = ?, uid_idfk = ?',[sleep_date, sleep_start, null, null,null, null, null, uid_idfk], (err, rows)=>{
            if(err) throw err; // db not connected

            if(!err){
                res.render('index', {layout:'./layouts/user-layout'});
            }else{
                console.log('no value inserted')
               
            }
        })
    });
    
    //
}
/*exports.setTime = (req, res)=>{ 
   
    const email = req.body.user_fname;
    connection.query('SELECT start_time FROM sleep_entry WHERE email =?',[email],(err,rows)=>{
        
        
    })
}*/