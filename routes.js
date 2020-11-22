// File : routes.js

// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to Meditation Live API'
    });
});

// Import User Controller
var userController = require('./controllers/user');

// Import UserView Controller
var userViewController = require('./controllers/userView');

// Import Product Controller
var productController = require('./controllers/product');

// User routes
router.route('/users')
    .get(userController.index)
    .post(userController.add);

router.route('/users/:userId')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);
    

// UserView routes
router.route('/user-views/')
    .get(userViewController.index)
    .post(userViewController.add);

router.route('/user-views/stats/:productId')
    .get(userViewController.stats)  

// Product routes
router.route('/products')
    .get(productController.index)
    .post(productController.add);

router.route('/products/:productId')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);    


// Export API routes
module.exports = router;
