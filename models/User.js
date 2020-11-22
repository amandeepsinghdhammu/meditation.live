/* 
 * File: user.js
 * Description : user Model
 */
 
var mongoose = require('mongoose');

// Get the Schema constructor
var Schema = mongoose.Schema;

// Schema
var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export User Model
var User = module.exports = mongoose.model('User', userSchema);

module.exports.get = function (callback, limit) {
   User.find(callback).limit(limit); 
}
