const express = require('express');
const router = express.Router();
const contactSubmissions = [];


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
    res.render('contact', { title: 'Contact Us', activePage: 'contact' });
});
router.post('/contact', function (req, res) {
    const { name, email, message } = req.body;

    contactSubmissions.push({
        name,
        email,
        message,
        timestamp: new Date()
    });

    console.log("New submission:", { name, email, message });
    res.redirect('/thankyou');
});


// events page router
router.get('/events', function (req, res) {
    res.render('events', {title: 'Events', activePage: 'events'});
});


// thank you page router
router.get('/thankyou', function (req, res) {
    res.render('thankyou', {title: 'Success', activePage: ''});
});


module.exports = router;