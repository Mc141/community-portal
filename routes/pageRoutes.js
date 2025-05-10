const express = require('express');
const router = express.Router();


// home page router
router.get('/', function (req, res) {
    res.render('home', {title: 'Home', activePage: 'home'});
});


// about page router
router.get('/about', function (req, res) {
    const teamMembers = [
        { name: 'PLACEHOLDER', role: 'PLACEHOLDER' },
        { name: 'PLACEHOLDER', role: 'PLACEHOLDER' },
        { name: 'PLACEHOLDER', role: 'PLACEHOLDER' },
        { name: 'PLACEHOLDER', role: 'PLACEHOLDER' },
        { name: 'PLACEHOLDER', role: 'PLACEHOLDER' }
    ];
    res.render('about', {title: 'About Us', activePage: 'about', team: teamMembers});
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