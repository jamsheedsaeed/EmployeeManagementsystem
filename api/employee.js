const exprss = require('express');
const Employee = require('../models/employee.js');
var app = exprss();
var url = "mongodb://jamsheed saeed:malik1234@ds161574.mlab.com:61574/new";

exports.empregister= function(req, res){
    let newEmployee = new Employee({

        employeename: req.body.field1,
        fname: req.body.field2,
        Email: req.body.field3,
        phone: req.body.field4,
        gender:req.body.field5,
        dob: req.body.field6,
        address: req.body.field7,
        title:req.body.field8,
        department: req.body.field10,
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

 
exports.editemployee = function(req,res){
  
    Employee.findOne({_id:req.body.id}).exec(function(err,Employee){
        if(err){
            console.log(Employee);
            res.status('500').send({message:'error'})
           
        }
        else{
            console.log(Employee);

            Employee.employeename = req.body.employeename;
            Employee.fname = req.body.fname;
            Employee.Email = req.body.Email;
            Employee.phone = req.body.phone;
            Employee.gender = req.body.gender;

            Employee.payscale = req.body.payscale;
            Employee.salary = req.body.salary;
            Employee.title = req.body.title;
            Employee.address = req.body.address;
           

            Employee.save(function(err,result){
                if(err){
                    res.status('500').send({message:'error found'})
                }
                else{
                    res.render("viewemp");
                    console.log(result);
                   
                }
            });
        }
    })
  }

/*
 exports.edit=function(req,res){
  
     Employee.findOne({_id:req.params.id}).exec(function(error,Employee){
      //  console.log(Employee);
      Employee.employeename = req.body.field1;
      Employee.fname=req.body.field2;
      Employee.Email=req.body.field3;
      Employee.phone=req.body.field4;
      Employee.gender=req.body.field5;
     
      Employee.save(function(error,Employee){
          if(error){
            res.status('500').send({message:'error found'})
          }else{
            res.render('viewemp');
          }
        });
      })
      */
   


