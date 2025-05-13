const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');

// Standard routes
router.get('/', controller.renderHome);
router.get('/about', controller.renderAbout);
router.get('/events', controller.renderEvents);
router.get('/contact', controller.renderContact);
router.post('/contact', controller.submitContact);
router.get('/thankyou', controller.renderThankYou);

// Catch-all (404) route
router.use(controller.render404);

module.exports = router;
