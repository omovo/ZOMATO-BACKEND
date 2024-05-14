const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
        

    password: {
        type: String,  // You can also use String which can contain anything.
        required: true
    },

    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('userDetails', userSchema,'user' );