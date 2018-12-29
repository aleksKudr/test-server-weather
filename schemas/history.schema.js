var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var historySchema = new Schema({
    city: Object,
    createdAt: Date,
    list: Array,
    userId: mongoose.Schema.Types.ObjectId


});

mongoose.model('History',historySchema);