const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuSchema = new Schema({
          name: String,
          
})

module.exports = mongoose.model('menuData', menuSchema,  'menu');    
