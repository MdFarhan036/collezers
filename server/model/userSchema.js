const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    courses:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
})

const ContactUser = mongoose.model('CONTACTUSER', userSchema);

module.exports = ContactUser;