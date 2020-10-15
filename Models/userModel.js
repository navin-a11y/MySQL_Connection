// Not in user in case of MySQL Connection
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, 'You must have to enter your name']
    },
    email: {
        type : String,
        unique : [true, 'Your email should be unique'],
        required: [true]
    },
    postal_Code: {
        type : Number,
        unique: [true, 'It should be unique'],
        maxlength: 6,
        minlength: 6
    },
    city: {
        type: String,
        required : [true, 'Must have city name']
    }
});

const User = mongoose.model("User", userSchema);