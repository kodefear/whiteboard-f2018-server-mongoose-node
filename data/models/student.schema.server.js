const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    _id: Number,
    username: {type: String, required:true},
    password: String,
    firstName: String,
    lastName: String,
    scholarship: Number,
    gradYear: Number
}, {collection: 'students'});
module.exports = studentSchema;