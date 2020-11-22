/* 
 * File: user.js
 * Description : User controller
 */

// Import User Model
User = require('../models/User');

module.exports = {
	index: async (req, res) => {
		await User.get(function (err, user) {
			if (err) {
					res.json({
							status: "error",
							message: err
					});
			}    
			res.json({
					status: "success",
					message: "Got user Successfully!",
					data: user       
			});
		});
	},
	add: async (req, res) => {
		var user = new User();
		console.log(req.body);
		user.name = req.body.name? req.body.name: user.name;
		
		//Save and check error
		user.save(function (err) {
				if (err)
						res.json(err);
				res.json({
						message: "New User Added!",
						data: user
				});
		});
	},
	view: async (req, res) => {
		await User.findById(req.params.userId, function (err, user) {
			if (err)
					res.send(err);
			res.json({
					message: 'User Details',
					data: user
			});
		});	
	},
	update: async (req, res) => {
		await User.findById(req.params.userId, function (err, user) {
			if (err)
					res.send(err);
			user.name = req.body.name ? req.body.name : user.name;
			
			//save and check errors
			user.save(function (err) {
					if (err)
							res.json(err)
					res.json({
							message: "User Updated Successfully",
							data: user
					});
			});
		});	
	},
	delete: async (req, res) => {
		await User.deleteOne({
			_id: req.params.userId
		}, function (err, user) {
				if (err)
						res.send(err)
				res.json({
						status: "success",
						message: 'User Deleted'
				})
		});	
	}	
}
