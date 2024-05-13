var loginModel = require('./a_loginModel');
var key ='8309996995peddireddybhumireddy';

var encryptor = require ('simple-encryptor')(key);


module.exports.createUserDBService = (logindetails) =>{
    return new Promise(function myFn(resolve,reject){
        var a_ModelData = new loginModel();
       a_ModelData.firstname = logindetails.firstname;
       a_ModelData.lastname = logindetails.lastname;
       a_ModelData.email = logindetails.email;
      //  a_ModelData.password = logindetails.password;
      //  a_ModelData.typeas = logindetails.typeas;
       var encrypted = encryptor.encrypt(logindetails.password);
       a_ModelData.password = encrypted;
       a_ModelData.save(function resultHandle(error, result) {
           if (error) {
               reject(false);
           } else {
               resolve(true);
           }
       });
   });
}

module.exports.loginUserDBService = (logindetails) =>{
    return new Promise(function myFn(resolve, reject) 
   {
      loginModel.findOne({ email: logindetails.email},function getresult(errorvalue, result)
      {
         if(result === null){
            resolve({status:true,msg:"signup"})
         }
         try {
            if(errorvalue)
         {
            reject({status: 0, msg: "Invaild Data"});
         }         
         else{
            if(result !=undefined &&  result !=null)
            // {
               var decrypted = encryptor.decrypt(result.password);
               // console.log("result passe");
               // console.log(result.password);
               // if(decrypted== logindetails.password)
            //    {
               console.log(logindetails.password);
               // console.log(decrypted);
               var a_ModelData = new loginModel();
               // console.log(a_ModelData.password);
               if(logindetails.password == decrypted){
                  // console.log("asdfasdfd");
                  // console.log(result.typeas);
                  if(result.typeas != "admin"){
                     resolve({status: true,msg: "user"});

                  }else{
                  resolve({status: 1,msg: "admin"});
                  }
               }
               else{
                  resolve({status:true,msg:"falsefalse"});
               }
         }
      
         } catch (error) {
            resolve({status:true,msg:"signup"});
         }
      });
      
   });
}

module.exports.passwordDBService = (logindetails) => {
   return new Promise((resolve, reject) => {
       // Find the user by email and update the password
      console.log(logindetails);
       loginModel.findOneAndUpdate({ email: logindetails.email }, { password: encryptor.encrypt(logindetails.password) },  (error, result) => {
           if (error) {
               console.error("Error updating password:", error);
               reject({ status: false, msg: "Invalid Data" });
           } else {
               console.log("Password updated successfully");
               console.log("resukt");
               console.log(result.password);
               resolve({ status: true, msg: "successfully" });
           }
       });
   });
};


module.exports.dataupdateservie = (data)=>{
   return new Promise((resolve, reject) => {
     console.log(data);
      loginModel.findOneAndUpdate({ email: data.email }, { $push: { productid: data._id } },{ new: true }, (error, result) => {
          if (error) {
              console.error("Error updating password:", error);
              reject({ status: false, msg: "Invalid Data" });
          } else {
              console.log("Password updated successfully");
              console.log("resukt");
              console.log(result.productcount);

              console.log(result.password);
              resolve({ status: true, msg: "successfully" });
          }
      });
  });
};


module.exports.getdata = (data) => {
   console.log(data);
   return new Promise(function(resolve, reject) {
       loginModel.findOne({ email: data.email }, function(error, result) {
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


module.exports.getdata1 = (data) => {
console.log(data);
   return new Promise(function checkURL(resolve, reject) {

       loginModel.findOne({email:data.email}, function returnData(error, result) {
           if (error) {
               reject(false);
           } else {
        console.log(result);
               resolve({status:true,msg:"Data found",data:result});
           }
       });

   });

}





// module.exports.passwordDBService123 = (logindetails) =>{
//    return new Promise(function myFn(resolve,reject)
//    {
//       loginModel.findOne({ email: logindetails.email},function getresult(errorvalue, result)
//       {
//          if(result === null){
//             resolve({status:true,msg:"signupreddy"})
//          }
//          try {
//             if(errorvalue)
//          {
//             reject({status: 0, msg: "Invaild Data"});
//          }
         
//          // else if(result.typeas == "admin"){
//          //       resolve({status:true,msg:"admin"});
//          // }
//          // else if(result.typeas =! "admin"){
//          //    resolve({status:true,msg:"signup"})
//          // }
         
//          else{
//             if(result !=undefined &&  result !=null)
//             // {
//                var encrypted = encryptor.encrypt(logindetails.password);
//                // if(decrypted== logindetails.password)
//             //    {
//                console.log(logindetails.password);
//                console.log(encrypted);
               
//                   // console.log("asdfasdfd");
//                   var a_ModelData = new loginModel();
//                   var encrypted = encryptor.encrypt(logindetails.password);
//                   a_ModelData.password = encrypted;

//                   console.log(a_ModelData);
//                   a_ModelData.save(function resultHandle(error, result) {
//                      if (error){
//                          reject(false);
//                          console.log("not updated");
//                          console.log(result);
//                      } else {
//                          resolve(true);
//                          console.log("updated");
//                      }
//                  });
             
//          }
      
//          } catch (error) {
//             resolve({status:true,msg:"signupjkhg"});
//             console.log(error);
//          }
//       });
//    });
// }

// module.exports.passwordDBService12 = (logindetails) => {
//    return new Promise(function(resolve, reject) {
//       loginModel.findOne({ email: logindetails.email }, function(errorvalue, result) {
//          if (errorvalue) {
//             console.error("Error while querying database:", errorvalue);
//             reject({ status: 0, msg: "Error querying database" });
//          } else {
//             if (result === null) {
//                console.log("User not found for email:", logindetails.email);
//                resolve({ status: true, msg: "signupreddy" });
//             } else {
//                try {
//                   // var encrypted = encryptor.encrypt(logindetails.password);
//                   var a_ModelData = new loginModel();
//                   var encrypted = encryptor.encrypt(logindetails.password);
//                   a_ModelData.password = encrypted;

//                   a_ModelData.save(function(error, result) {
//                      if (error) {
//                         console.error("Error saving password to database:", error);
//                         reject({ status: 0, msg: "Error saving password to database" });
//                      } else {
//                         console.log("Password updated successfully");
//                         resolve(true);
//                      }
//                   });
//                } catch (error) {
//                   console.error("Error occurred:", error);
//                   resolve({ status: true, msg: "signupjkhg" });
//                }
//             }
//          }
//       });
//    });
// }




// module.exports.passwordDBService1 = (logindetails) => {
//    return new Promise((resolve, reject) => {
//        console.log(logindetails);
//        loginModel.findOneAndUpdate({ email: logindetails.email }, { password: encryptor.encrypt(logindetails.password) }, { new: true }, (error, result) => {
//            if (error) {
//                console.error("Error updating password:", error);
//                reject({ status: false, msg: "Error updating password" });
//            } else if (!result) {
//                console.error("User not found");
//                reject({ status: false, msg: "User not found" });
//            } else {
//                console.log("Password updated successfully");
//                console.log("Updated password:", result.password);
//                resolve({ status: true,  msg: "Password updated successfully" });
//            }
//        });
//    });
// };






// module.exports.passwordDBService = (logindetails) =>{
//    return new Promise(function myFn(resolve,reject)
//    {
      
//       // var decrypted = encryptor.decrypt(logindetails.password);
//       console.log(logindetails.password);
//       loginModel.findOne({password: logindetails.password},function getresult(errorvalue,result)
//       {
//       //    // console.log("hgggguyg");
//       //    // console.log(result.password);

//          if(result.password == logindetails.password){
//             resolve({status:true,msg:"user"})
//          }
//          else{
//             reject({status:false,msg:"update"});
//          }
//          // if(errorvalue)
//          // {
//          //    reject({status: false, msg: "Invaild Data"});
//          // }else{
//          //    if(result !=undefined &&  result !=null)
//          //    {
//          //       var decrypted = encryptor.decrypt(result.password);
//          //       if(decrypted == logindetails.password)
//          //       {
//          //          resolve({status: true,msg: "Student Validated Successfully........"});
//          //       }
//          //       else
//          //       {
//          //          reject({status: false,msg: "Student Validated failed"});
//          //       }
//          //    }
//          //    else
//          //    {
//          //       reject({status: false,msg: "Student Error Detailssss"});
//          //    }
//          // }
//       });
      
//    });
// }




