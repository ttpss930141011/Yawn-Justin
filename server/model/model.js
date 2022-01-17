const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    count:Number
})
schema.set('collection','yawn');
const yawn = mongoose.model('yawn', schema);

module.exports = yawn;