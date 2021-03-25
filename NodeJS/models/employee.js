const mongoose = require('mongoose');

var Employee = mongoose.model('MeanDetails', {
    name: { type: String },
    age: { type: Number },
    address: { type: String }
});

module.exports = { Employee };