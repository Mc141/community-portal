const express = require('express');
const router = express.Router();


// home page router
router.get('/', function (req, res) {
    res.render('home', {title: 'Home', activePage: 'home'});
});


// about page router
router.get('/about', function (req, res) {
    res.render('about', {title: 'About Us', activePage: 'about'});
});


// contact page router
router.get('/contact', function (req, res) {
    res.render('contact', {title: 'Contact Us', activePage: 'contact'});
});


// events page router
router.get('/events', function (req, res) {
    res.render('events', {title: 'Events', activePage: 'events'});
});


// thank you page router
router.get('/thankyou', function (req, res) {
    res.render('thankyou', {title: 'Success'});
});


module.exports = router;