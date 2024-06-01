//Model users
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add your mail'],
        unique: true
    },
    password: {
        type: String,
         required: [true, 'Please add your password']
    },
},
// add createat and update date
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);