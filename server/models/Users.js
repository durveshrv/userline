const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6 
    },
    age: {
        type: Number,
        min: 0
    },
    phone: {
        type: String
    }
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
