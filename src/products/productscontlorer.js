var productservice = require('./productsservice');

var getDataConntrollerproduct = async (req, res) =>
{
    try{
        var empolyee = await productservice.getdatafromproductservice();
    res.send({ "status": true, "data": empolyee });
}catch(error){
    res.send({ "status": false, "message": "Error getting data" });
}
}

var createproductControllerFn = async (req, res) => 
{
    try{
        var status = await productservice.createproductDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "created" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}catch(error){
    res.send({ "status": false, "message": "Error creating user" });
}
}

var updateproductController = async (req, res) => 
{
    try{
        console.log(req.params.id);
    console.log(req.body);
     
    var result = await productservice.updateproductDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "User Updateeeedddddd"} );
     } else {
         res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
     }
    }catch(error){
        res.send({ "status": false, "message": "Error updating user" });
    }
}

var deleteproductController = async (req, res) => 
{
    try{
        console.log(req.params.id);
        var result = await productservice.removeproductDBService(req.params.id);
        if (result) {
           res.send({ "status": true, "message": "User Deleteddd"} );
        } else {
            res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
        }
    }catch(error){
        res.send({ "status": false, "message": "Error deleting user" });
    }
}

var productdata1 = async (req,res) =>{
    // var result = null;
    console.log(req.body);
    try{
        result = await productservice.getdata1(req.body);
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


module.exports = { getDataConntrollerproduct,createproductControllerFn,updateproductController,deleteproductController,productdata1 };