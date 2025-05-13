const { getUpcomingEvents, getAllEvents } = require('../data/events');
const { getAllOrganisers } = require('../data/organisers');
const { addSubmission, getSubmissions } = require('../data/submissions');
const { isValidEmail, isValidPhone, isNotEmpty } = require('../utils/validators');

exports.renderHome = (req, res) => {
  res.render('pages/home', {
    title: 'Home',
    activePage: 'home',
    events: getUpcomingEvents(3),
    pageStylesheet: '/css/pages/home.css'
  });
};

exports.renderAbout = (req, res) => {
  res.render('pages/about', {
    title: 'About Us',
    activePage: 'about',
    organizers: getAllOrganisers(),
    pageStylesheet: '/css/pages/about.css'
  });
};

exports.renderEvents = (req, res) => {
  res.render('pages/events', {
    title: 'Events',
    activePage: 'events',
    events: getAllEvents(),
    pageStylesheet: '/css/pages/events.css'
  });
};

exports.renderContact = (req, res) => {
  res.render('pages/contact', {
    title: 'Contact Us',
    activePage: 'contact',
    pageStylesheet: '/css/pages/contact.css'
  });
};

exports.submitContact = (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Ensure all required fields are filled out
  if (![firstName, lastName, email, message, phone].every(isNotEmpty)) {
    return res.status(400).send('Please fill in all required fields.');
  }

  // Validate email and phone
  if (!isValidEmail(email)) {
    return res.status(400).send('Invalid email format.');
  }

  if (!isValidPhone(phone)) {
    return res.status(400).send('Invalid phone number format.');
  }

  // Prepare the submission object
  const submission = {
    name: `${firstName.trim()} ${lastName.trim()}`, // Combine first and last name
    email: email.trim(),
    phone: phone.trim(),
    message: message.trim()
  };

  // Add the submission to the array
  addSubmission(submission);

  // Log the new submission and all submissions for debugging
  console.log('New submission received:');
  console.log(submission);
  console.log('All submissions:');
  console.log(getSubmissions());

  // Redirect to the thank you page
  res.redirect('/thankyou');
};

exports.renderThankYou = (req, res) => {
  res.render('pages/thankyou', {
    title: 'Success',
    activePage: '',
    pageStylesheet: '/css/pages/thankyou.css'
  });
};

exports.render404 = (req, res) => {
  res.status(404).render('pages/404', {
    title: 'Page Not Found',
    activePage: '',
    pageStylesheet: '/css/pages/404.css'
  });
};
