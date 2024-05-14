const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    name: {
        type: String,
        required: true    // You can also remove required: true and type and everything would still work normal. (name:string, and take off curly braces)
    }       
})

module.exports = mongoose.model('Acelide', locationSchema, 'location');    // Acelid is the Connection Name


//locationDB.js can also be named as mongoose.js or database.js

