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
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
    return res.status(400).send('Please fill in all required fields.');
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const trimmedPhone = phone ? phone.trim() : '';

  //Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
    return res.status(400).send('Please enter a valid email address.');
    return false;
}   
    //phone validation
  const phonePattern = /^[0-9+\-\s]{7,15}$/;
    if (trimmedPhone && !phonePattern.test(trimmedPhone)) {
    return res.status(400).send('Phone number format is invalid.');
  }

    contactSubmissions.push({
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone,
        message: trimmedMessage,
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