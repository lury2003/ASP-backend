const express = require('express')
const app = express()
const mongoose = require("mongoose");
mongoose.set(`strictQuery`,false);
var routes = require('./routes/routes');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const products = require('./routes/products');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());
// const accesst = require("./accesskry")
  const users = {};
//   var loginModel = require('./a_loginModel');

app.use(cors({
  origin: 'https://dashing-trifle-0caff2.netlify.app' // Replace with your Netlify app's URL
}));


const employee = require('./routes/employee');



app.post('/sendlink', (req, res) => {
  const { email } = req.body;
  console.log(email);
  const verificationToken = uuid.v4(); // Generate a unique verification token
  // checkAccessTokenExpiration();

  users[email] = verificationToken; // Store the verification token

  const verificationLink = `http://localhost:4200/password?token=${verificationToken}+${email}`;
  const transporter =  nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'asp73118@gmail.com',
        pass: 'mndpdpowzlrszdxk'
    }
})
//2.configure email content.
const mailOptions = {
    from:'asp73118@gmail.com',
    to: email,
    subject: 'Welcome to NodeJS App',
    text: `Click on the following link to verify your email address: ${verificationLink}`
  }
//3. send email
try {
   const result =  transporter.sendMail(mailOptions);
   console.log('Eamil sent successfully')
} catch (error) {
    console.log('Email send failed with error:', error)
}
});

app.post('/getqoute',(req,res)=>{

    const {email} =req.body;
    const {name}=req.body;
    const {data}=req.body;
    const {points}=req.body;
    const {_id}=req.body;

    console.log(_id);
    console.log(email);
    console.log(req.body);
    const verificationToken = uuid.v4();
    users[email]=verificationToken;
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'asp73118@gmail.com',
        pass: 'mndpdpowzlrszdxk'
    }
})
const mailOptions = {
    from:'asp73118@gmail.com',
    to: email,
    subject: 'Requested Quotation From ASP',
    text: `You are Requested for the product ${name}\n
    <h3>Details of the Product are : </h3>
    ${data}\n
    <h4>Features of the Products are : </h4>
    ${points}`
  }
  try {
    const result =  transporter.sendMail(mailOptions);
    console.log('Eamil sent successfully')
 } catch (error) {
     console.log('Email send failed with error:', error)
 }
 
});










// const axios = require('axios');
// // var accesst="";

// // Function to refresh the access token
// // async function refreshAccessToken(refreshToken) {
// //     try {
// //         const response = await axios.post('https://oauth-server.com/token', {
// //             grant_type: 'refresh_token',
// //             refresh_token: refreshToken,
// //             client_id: '23178217239-sn1mp4579233ar73138prtopjugu98fc.apps.googleusercontent.com',
// //             client_secret: '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'
// //         });

// //         const { access_token, expires_in } = response.data;
// //         console.log('New access token:', access_token);
// //         console.log('Expires in:', expires_in);
// //         accesst=access_token;
// //         // Update the stored access token and its expiration time
// //         // You can store it in memory, database, or any other suitable storage mechanism
// //         // For simplicity, let's assume we update global variables here
// //         global.accessToken = access_token;
// //         global.tokenExpirationTime = Date.now() + (expires_in * 1000); // Convert seconds to milliseconds
// //     } catch (error) {
// //         console.error('Error refreshing access token:', error.response.data);
// //         throw error;
// //     }
// // }

// // // Function to check if the access token needs refreshing
// // function checkAccessTokenExpiration() {
// //     if (!global.accessToken || !global.tokenExpirationTime) {
// //         console.log('Access token or expiration time not available. Refreshing access token...');
// //         // If access token or expiration time is not available, refresh the access token immediately
// //         refreshAccessToken('1//04NeWmw9MFaS9CgYIARAAGAQSNwF-L9IrRA8xyHKY4DvVGu0JpMpj6kg5OPzstSDuMkybtc4b6tYQ44NBLCsXdqhgASk-a5RRXDs');
// //     } else {
// //         const currentTime = Date.now();
// //         const timeToRefresh = 5 * 60 * 1000; // Refresh token 5 minutes before expiry
// //         if (global.tokenExpirationTime - currentTime < timeToRefresh) {
// //             console.log('Access token is about to expire. Refreshing access token...');
// //             // If access token is about to expire, refresh the access token
// //             refreshAccessToken('1//04NeWmw9MFaS9CgYIARAAGAQSNwF-L9IrRA8xyHKY4DvVGu0JpMpj6kg5OPzstSDuMkybtc4b6tYQ44NBLCsXdqhgASk-a5RRXDs');
// //         } else {
// //             console.log('Access token is still valid.');
// //         }
// //     }
// // }

// // // Timer to periodically check and refresh the access token
// // setInterval(checkAccessTokenExpiration, 60 * 1000); // Check every minute

// // // Initial token check on application startup


// const oAuth2Client = new google.auth.OAuth2(
//     '23178217239-sn1mp4579233ar73138prtopjugu98fc.apps.googleusercontent.com',
//     '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',
//     'https://developers.google.com/oauthplayground'
//   );
  
//   // Set the access token
//   oAuth2Client.setCredentials({
//     access_token: accesst,
//   });


// const transporter = nodemailer.createTransport({
  
//     service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: 'n13710236@gmail.com',
//       clientId: '23178217239-sn1mp4579233ar73138prtopjugu98fc.apps.googleusercontent.com',
//       clientSecret: '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',
//       refreshToken: '1//04NeWmw9MFaS9CgYIARAAGAQSNwF-L9IrRA8xyHKY4DvVGu0JpMpj6kg5OPzstSDuMkybtc4b6tYQ44NBLCsXdqhgASk-a5RRXDs',
//       accessToken: oAuth2Client.getAccessToken(),
//     },
//   });
//   const users = {};


//   app.post('/sendlink1', (req, res) => {
//     const { email } = req.body;
//     console.log(email);
//     const verificationToken = uuid.v4(); // Generate a unique verification token
//     // checkAccessTokenExpiration();

//     users[email] = verificationToken; // Store the verification token
  
//     const verificationLink = `http://localhost:4200/password?token=${verificationToken}+${email}`;
  
//     const mailOptions = {
//       from: 'n13710236@gmail.com',
//       to: email,
//       subject: 'Verify Your Email Address',
//     //   text: `Click on the following link to verify your email address: `
//       text: `Click on the following link to verify your email address: ${verificationLink}`

//     };
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error(error);
//           res.status(500).json({ success: false, message: 'Failed to send verification email' });
//         } else {
//           console.log('Email sent: ' + info.response);
//           res.status(200).json({ success: true, message: 'Verification email sent successfully' });
//         }
//       });
//     });


//     app.get('/verify-email', (req, res) => {
//         const { token } = req.query;
//         const email = Object.keys(users).find(email => users[email] === token);
      
//         if (email) {
//           delete users[email]; // Remove the verification token
//           // Here you can update the user's account status to indicate email verification
//           res.send('verified');
//         } else {
//           res.send('Invalid or expired verification token');
//         }
//       });



// app.use(cors({
//     origin:"http://localhost:4200"
// }))







app.listen(2003,function check(error){
    if(error)
    console.log("Eorro !!!!");
    else
    console.log("Started   !!!");
});

mongoose.connect("mongodb+srv://n13710236:nlh0p06AyMlaMGii@asp.1ewvf3g.mongodb.net/?retryWrites=true&w=majority&appName=ASP",{useNewUrlParser: true,  useUnifiedTopology: true },
function checkDb(error)
{
    if(error)
    {
        console.log("Error Connecting to DB");
    }
    else
    {
        console.log("successfully Connected to DB");
    }
});



app.use(express.json());
app.use(routes);
app.use(employee);
app.use(products);
