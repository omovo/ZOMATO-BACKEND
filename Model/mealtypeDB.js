const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mealtypeSchema = new Schema({
          name: String,
          
})

module.exports = mongoose.model('mealtypetData', mealtypeSchema,  'mealtype');    
