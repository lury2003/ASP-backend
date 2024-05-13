var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    typeas:{
        type:String
    },

    productid: [{type:String}]
    
});

module.exports = mongoose.model('admin_login', studentSchema);