/* 
 * File: product.js
 * Description : product Model
 */
 
var mongoose = require('mongoose');

// Get the Schema constructor
var Schema = mongoose.Schema;

// Schema
var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Product Model
var Product = module.exports = mongoose.model('Product', productSchema);

module.exports.get = function (callback, limit) {
   Product.find(callback).limit(limit); 
}
