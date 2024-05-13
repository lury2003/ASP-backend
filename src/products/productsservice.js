var productmodel = require('./productsmodel');

module.exports.getdatafromproductservice = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        productmodel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createproductDBService = (userDetails) => {


    return new Promise(function myFn(resolve, reject) {
 console.log(userDetails);
        var productmodelData = new productmodel();
 
        productmodelData.name = userDetails.name;
        productmodelData.data = userDetails.data;
        productmodelData.points = userDetails.points;
        productmodelData.url=userDetails.url;

        productmodelData.save(function resultHandle(error, result) {
 
            if (error){
                reject(false);
            
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateproductDBService = (id,userDetails) => {     
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        productmodel.findByIdAndUpdate(id,userDetails, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });
 
    });
 }

 module.exports.removeproductDBService = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        productmodel.findByIdAndDelete(id, function returnData(error, result) {
 
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
             console.log("asdddddddddd")
          }          
        });
    });
 
 }




 module.exports.getdata1 = (data) => {
    // console.log(data);
    return new Promise(function(resolve, reject) {
        productmodel.findOne({ _id: data._id }, function(error, result) {
            if (error) {
                console.error("Error retrieving data:", error);
                reject(error);
            } else {
                if (result) {
                    console.log(result);
                    resolve({result});
                } else {
                    console.log("No data found");
                    resolve({ status: false, msg: "No data found", data: null });
                }
            }
        });
    });
 }