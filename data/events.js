const events = [
        {
      title: 'Community Meetup',
      date: 'May 20, 2025',
      location: 'City Library',
      organizer: 'John Doe',
      image: '/images/events/meetup.jpg',
      description:
        'Join neighbours for coffee, conversation, and connection at our Community Meetup.'
    },
    {
      title: 'Tech Workshop',
      date: 'May 28, 2025',
      location: 'Innovation Hub',
      organizer: 'Jane Smith',
      image: '/images/events/tech.jpg',
      description:
        'Hands-on session for coding enthusiasts to explore new technologies and collaborate.'
    },
    {
      title: 'Park Cleanup',
      date: 'June 1, 2025',
      location: 'Central Park',
      organizer: 'GreenTeam',
      image: '/images/events/volunteers.jpg',
      description:
        'Join us for a community-led effort to clean and preserve our shared green space.'
    },
    {
      title: 'Book Fair',
      date: 'June 10, 2025',
      location: 'Downtown Plaza',
      organizer: 'Readers Club',
      image: '/images/events/book.jpg',
      description:
        'Explore hundreds of book stalls and meet local authors'
    },
    {
      title: 'Charity Run',
      date: 'June 15, 2025',
      location: 'Riverfront Trail',
      organizer: 'ActiveLife',
      image: '/images/events/run.jpg',
      description:
        "Participate in our 5K run to raise funds for local children's education."
    },
    {
      title: 'Art Exhibition',
      date: 'June 22, 2025',
      location: 'City Gallery',
      organizer: 'Arts United',
      image: '/images/events/art.jpg',
      description:
        'Showcasing work by emerging artists in our community. Free entry for all.'
    }
];

function getAllEvents() {
  return events;
}

function getUpcomingEvents(limit) {
  return typeof limit === 'number' && limit > 0
    ? events.slice(0, limit)
    : events;
}

module.exports = {
  getAllEvents,
  getUpcomingEvents
};
