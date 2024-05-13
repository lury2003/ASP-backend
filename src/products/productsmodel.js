var mongoose = require('mongoose');
var Schem = mongoose.Schema;

var productschema = new Schem({
url:{
    type:String,
    required:true
},
    name: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('products', productschema);