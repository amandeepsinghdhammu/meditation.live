/* 
 * File: userView.js
 * Description : User Product View Log Model
 */
 
var mongoose = require('mongoose');

// Get the Schema constructor
var Schema = mongoose.Schema;

// Schema
var userViewSchema = new Schema({
    UserId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    ProductId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    ViewDate: {
        type: Date,
        default: Date.now
    }
});

// Export User View Log Model
var UserView = module.exports = mongoose.model('UserView', userViewSchema);

module.exports.get = function (callback, limit) {
	UserView.find(callback).limit(limit);
  //UserView.find(callback).populate('ProductId').populate('UserId').limit(limit); 
}

module.exports.parseId = function(id) {
	return mongoose.Types.ObjectId(id); 	
}
