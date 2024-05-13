var loginService = require('./a_loginService');

var createUserControllerFn = async(req ,res) => 
{
    try{
        console.log(req.body);
        var status = await loginService.createUserDBService(req.body);
        console.log(status);
        if(status){
            res.send({"status": true,"message": "user created successfully"});
        }else{
            res.send({"status": false,"message": "error creating user"});
 
        }
    }
    catch(err){
        console.log(err);
    }
}

 var passwordControllerFn = async (req,res) =>{
    var result = null;
    try{
        result = await loginService.passwordDBService(req.body);
        if(result.status){
            res.send({"status": true,"message":result.msg});
        }else{
            res.send({"status123 ": false,"message":result.msg});
        }
    }catch (error){
        console.log(error);
        res.send({"ststus":false,"message":error.msg});
    }
 } 

var loginUserControllerFn = async (req, res) => {
    var result =null;
    try{
        result =await loginService.loginUserDBService(req.body);
        if(result.status){
            res.send({"status": true,"message":result.msg});
        }else{
            res.send({"statusfsdfs": false,"message":result.msg});
        }
    }catch (error){
        console.log(error);
        res.send({"ststus":false,"message":error.msg});
    }
}

var productdata = async (req,res) =>{
    var result = null;
    try{
        result = await loginService.dataupdateservie(req.body);
        if(result.status){
            res.send({"status": true,"message":result.msg});
        }else{
            res.send({"status123 ": false,"message":result.msg});
        }
    }catch (error){
        console.log(error);
        res.send({"ststus":false,"message":error.msg});
    }
 } 





 var getdatacontrol = async (req,res) =>{
    // var result = null;

    console.log(req.body);
    try{
        result = await loginService.getdata(req.body);
        // console.log(result.status);
        if(result){
            res.send(result);
        }else{
            res.send({"status123 ": false,"message":result.msg});
        }
    }catch (error){
        console.log(error);
        res.send({"ststus":false,"message":error.msg});
    }
 } 

module.exports = {createUserControllerFn,loginUserControllerFn,passwordControllerFn,productdata,getdatacontrol};

