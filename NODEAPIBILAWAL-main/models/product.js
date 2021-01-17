var mongoose = require("mongoose");
const joi = require('@hapi/joi');
var productschema = mongoose.Schema({
    interior : String,
    exterior : String,
    Link : String,
    description: String,
});

var productmodel = mongoose.model("products",productschema);

function validateproduct(data)
{
    const schema = joi.object({
        interior : joi.string().min(3).max(100).required(),
        exterior : joi.string().min(3).max(100).required(),
        description : joi.string().min(3).max(100).required(),
        Link : joi.string().required(),
    });
    return schema.validate(data);
}

module.exports.Product=productmodel;
module.exports.validate = validateproduct;