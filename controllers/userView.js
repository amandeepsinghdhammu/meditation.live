/* 
 * File: userView.js
 * Description : User View Product controller
 */

// Import User View Model
UserView = require('../models/UserView');

module.exports = {
	index: async (req, res) => {
		await UserView.get(function (err, userView) {
			if (err) {
					res.json({
							status: "error",
							message: err
					});
			}    
			res.json({
					status: "success",
					message: "Got userView Successfully!",
					data: userView       
			});
		});
	},
	add: async (req, res) => {
		var userView = new UserView();
		userView.UserId = req.body.UserId;
		userView.ProductId = req.body.ProductId;
		
		//Save and check error
		userView.save(function (err) {
				if (err)
						res.json(err);
				res.json({
						message: "New UserView Added!",
						data: userView
				});
		});
	},
	stats: async (req, res) => {
		
		let productId = UserView.parseId(req.params.productId);			
		let startDate = (req.query.startDate) ? req.query.startDate : undefined;
		let endDate = (req.query.endDate) ? req.query.endDate : undefined;
		let filter = (req.query.filter) ? req.query.filter.toLowerCase() : 'none';
		let condition = { $expr: { $and: [ { $eq: ['$ProductId', productId] } ] } }; // Default it will show as per product Id
		
		if(startDate !== undefined && endDate !== undefined) {
			// Filter by custom date
			filter = 'date'
			condition = {
				$expr: {
					$and: [
						{ $eq: ['$ProductId', productId] },
						{ $gte: ['$ViewDate', new Date(new Date(startDate).setHours(00, 00, 00))] },
						{ $lt: ['$ViewDate', new Date(new Date(endDate).setHours(23, 59, 59))] }
					]
				}
			}			
		} else {
			switch(filter) {
				case 'day':
					// Filter by day
					condition = {
						$expr: {
							$and: [
								{ $eq: [{ $dayOfMonth: '$ViewDate' }, { $dayOfMonth: new Date() }] },
								{ $eq: ['$ProductId', productId] }
							]
						}
					};
					break;
				case 'month':
					// Filter by month
					condition = {
						$expr: {
							$and: [
								{ $eq: [{ $month: '$ViewDate' }, { $month: new Date() }] },
								{ $eq: ['$ProductId', productId] }
							]
						}
					};
					break;
				case 'week': //Weeks begin on Sundays
					// Filter by week
					condition = {
						$expr: {
							$and: [
								{ $eq: [{ $week: '$ViewDate' }, { $week: new Date() }] },
								{ $eq: ['$ProductId', productId] }
							]
						}
					}
					break;	
				default:
					break;
			}			
		}
		
		// Fetch desire output
		await UserView.aggregate([
			{
				$match : condition
			},
			{ 
				$group: {
					_id: "$UserId",
					count: { "$sum": 1 }
				}
			},	
			{ 
				$group: {
					_id: "$UserId",
					totalCount: { "$sum": "$count" },
					distinctCount: { "$sum": 1 }
			}},
			{
				$project: {
					_id: 0,
					totalUsers: '$totalCount',
					totalUniqueUsers: "$distinctCount",
					filterBy: filter					
				}
			}
		]).exec((err, result) => {
			if (err)
				res.send(err);
			res.json({
				message: 'User View Count',
				data: result
			});
		});
	}	
}
