const exprss = require('express');
const Employee = require('../models/employee.js');
var app = exprss();
var url = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";

exports.empregister= function(req, res){
    let newEmployee = new Employee({
/*
       username: req.body.ename,
        fname:req.body.fname,
        password: req.body.pass,
      //  birth_date:require.body.date,
       Salary:req.body.sal,
        gender : req.body.subject,
        Blood : req.body.subject1,
        Religion : req.body.subject2 ,
        Status: req.body.subject3,
        
        Nationality: req.body.subject4,
        Email : req.body.email,
       // cnic:req.body.cnic,
        Domicile :req.body.subject5 ,
       interest:req.body.interest,
       Address : req.body.address,
      // Contact_num : req.body.contact ,
        Qualification : req.body.qualifi ,
        Department : req.body.subject6*/

        employeename: req.body.field1,
        fname: req.body.field2,
        Email: req.body.field3,
        phone: req.body.field4,
        gender:req.body.field5,
        dob: req.body.field6,
        address: req.body.field7,
        title:req.body.field8,
        department: req.body.field9,
        startdate: req.body.sdate,
        salary: req.body.sal,
        payscale: req.body.field11,
        username: req.body.field12,
        Password: req.body.field13,
   
        EmgFullName: req.body.field14,
        Relationship: req.body.field15,
        EPhone: req.body.field16
  
    });
    newEmployee.save((err, Employee)=>{
        if(err){
            res.json({msg: 'Failed to add the User'});
        }
        else{
       
            res.render("register");
      
         
            
        }
    });
}



exports.getAll = function (req, res) {
    Employee
        .find({})
        .exec(function (error, employee) {
            if (error) {
                res
                    .status(500)
                    .send({message: error});
            } else {
                res
                    .status(200)
                    .send(employee);
            }
        })
}


 exports.delete = function(req, res, next){
    Employee.remove({_id: req.params.id},function(err, result){
         if(err){
            res.json(err);
       }
       else{
           res.json(result);
        }
    });
 }


 exports.edit=function(req,res){
    if(req.params.id==undefined){
      res.status(404).send({
        message:'one or more perameters missing'
      });
    }else{
     Employee.findOne({_id:req.params.id}).exec(function(error,Employee){
      //  console.log(Employee);
      Employee.username=req.body.username?req.body.username:Events.title;
      Employee.subtitle=req.body.subtitle?req.body.subtitle:Events.subtitle;
      Employee.description=req.body.description?req.body.description:Events.description;
      Employee.imageurl=req.body.imageurl?req.body.imageurl:Events.imageurl;
      Employee.date=req.body.date?req.body.date:Events.date;      
      Employee.save(function(error,Employee){
          if(error){
            res.status('500').send({message:'error found'})
          }else{
            res.status('202').send({message:'updated'})
          }
        });
      })
   }
  }
 
/*
 exports.delete = function(req, res) {
    ///your mongose delete query
   
    var db = req.db;
    
        var employeeDelete = req.params._id;
    
        db.collection('employees').removeById(employeeDelete, function(err, result) {  
   
        res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
      });
   
      }
*/


/*
exports.delete =  function(req, res) {
    var db = req.db;
    var empdelete = req.params.id;
    db.collection('employees').removeById(empdelete, function(err, result) {
        res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    });
};*/

  
