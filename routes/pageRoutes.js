const express = require('express');
const router = express.Router();
const contactSubmissions = [];

// helper to return an array of 6 upcoming events
function allUpcomingEvents() {
  return [
    {
      title: 'Community Meetup',
      date: 'May 20, 2025',
      location: 'City Library',
      organizer: 'John Doe',
      image: '/images/meetup.jpg',
      description:
        'Join neighbours for coffee, conversation, and connection at our Community Meetup.'
    },
    {
      title: 'Tech Workshop',
      date: 'May 28, 2025',
      location: 'Innovation Hub',
      organizer: 'Jane Smith',
      image: '/images/tech.jpg',
      description:
        'Hands-on session for coding enthusiasts to explore new technologies and collaborate.'
    },
    {
      title: 'Park Cleanup',
      date: 'June 1, 2025',
      location: 'Central Park',
      organizer: 'GreenTeam',
      image: '/images/volunteers.jpg',
      description:
        'Join us for a community-led effort to clean and preserve our shared green space.'
    },
    {
      title: 'Book Fair',
      date: 'June 10, 2025',
      location: 'Downtown Plaza',
      organizer: 'Readers Club',
      image: '/images/book.jpg',
      description:
        'Explore hundreds of book stalls and meet local authors'
    },
    {
      title: 'Charity Run',
      date: 'June 15, 2025',
      location: 'Riverfront Trail',
      organizer: 'ActiveLife',
      image: '/images/run.jpg',
      description:
        "Participate in our 5K run to raise funds for local children's education."
    },
    {
      title: 'Art Exhibition',
      date: 'June 22, 2025',
      location: 'City Gallery',
      organizer: 'Arts United',
      image: '/images/art.jpg',
      description:
        'Showcasing work by emerging artists in our community. Free entry for all.'
    }
  ];
}

function allOrganizers() {
  return [
    {
      name: 'John Doe',
      role: 'Community Meetup Organizer',
      image: '/images/john-doe.jpg',
      description:
        'John is passionate about bringing people together. As the organizer of our Community Meetup, he ensures a welcoming space for networking and collaboration.'
    },
    {
      name: 'Jane Smith',
      role: 'Tech Workshop Host',
      image: '/images/jane-smith.jpg',
      description:
        'Jane is a tech enthusiast dedicated to knowledge-sharing. She organizes hands-on coding workshops that allow developers to explore new technologies.'
    },
    {
      name: 'GreenTeam',
      role: 'Park Cleanup Organizers',
      image: '/images/greenteam.jpg',
      description:
        'The GreenTeam is committed to environmental sustainability. They lead initiatives like park cleanups to maintain our shared green spaces.'
    },
    {
      name: 'Readers Club',
      role: 'Book Fair Hosts',
      image: '/images/readers-club.jpg',
      description:
        'The Readers Club loves fostering literary engagement. The book fair offers space for book lovers to meet authors and explore diverse genres.'
    },
    {
      name: 'ActiveLife',
      role: 'Charity Run Organizers',
      image: '/images/activelife.jpg',
      description:
        "ActiveLife motivates the community to stay active while making a difference. Their charity run raises funds for children's education."
    },
    {
      name: 'Arts United',
      role: 'Art Exhibition Coordinators',
      image: '/images/arts-united.jpg',
      description:
        'Arts United celebrates creative expression by organizing exhibitions that showcase emerging local artists.'
    }
  ];
}

// about page router
router.get('/about', (req, res) => {
  const organizers = allOrganizers();        // default: all 6
  res.render('about', {
    title: 'About Us',
    activePage: 'about',
    organizers                              // <-- pass this in
  });
});

// returns up to limit events
function getUpcomingEvents(limit) {
  const events = allUpcomingEvents();
  return typeof limit === 'number' && limit > 0
    ? events.slice(0, limit)
    : events;
}

router.get('/events', (req, res) => {
  const events = getUpcomingEvents(6);
  res.render('events', {title: 'Events', activePage: 'events', events });
});

router.get('/', (req, res) => {
  const events = getUpcomingEvents(3);
  res.render('home', { title: 'Home', activePage: 'home', events });
});

// home page router
router.get('/', function (req, res) {
  const events = getUpcomingEvents();
  res.render('home', {
    title: 'Home',
    activePage: 'home',
    events          // <-- pass to your template
  });
});

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
// router.get('/events', function (req, res) {
//     res.render('events', {title: 'Events', activePage: 'events'});
// });


// thank you page router
router.get('/thankyou', function (req, res) {
    res.render('thankyou', {title: 'Success', activePage: ''});
});


module.exports = router;