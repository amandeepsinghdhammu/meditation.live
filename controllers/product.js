/* 
 * File: product.js
 * Description : Product controller
 */

// Import Product Model
Product = require('../models/Product');

module.exports = {
	index: async (req, res) => {
		await Product.get(function (err, product) {
			if (err) {
					res.json({
							status: "error",
							message: err
					});
			}    
			res.json({
					status: "success",
					message: "Got product Successfully!",
					data: product       
			});
		});
	},
	add: async (req, res) => {
		var product = new Product();
		product.name = req.body.name? req.body.name: product.name;
		
		//Save and check error
		product.save(function (err) {
				if (err)
						res.json(err);
				res.json({
						message: "New Product Added!",
						data: product
				});
		});
	},
	view: async (req, res) => {
		await Product.findById(req.params.productId, function (err, product) {
			if (err)
					res.send(err);
			res.json({
					message: 'Product Details',
					data: product
			});
		});	
	},
	update: async (req, res) => {
		await Product.findById(req.params.productId, function (err, product) {
			if (err)
					res.send(err);
			product.name = req.body.name ? req.body.name : product.name;
			
			//save and check errors
			product.save(function (err) {
					if (err)
							res.json(err)
					res.json({
							message: "Product Updated Successfully",
							data: product
					});
			});
		});	
	},
	delete: async (req, res) => {
		await Product.deleteOne({
			_id: req.params.productId
		}, function (err, product) {
				if (err)
						res.send(err)
				res.json({
						status: "success",
						message: 'Product Deleted'
				})
		});	
	}	
}
