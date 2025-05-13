const organizers = [
     {
      name: 'John Doe',
      role: 'Community Meetup Organizer',
      image: '/images/about/john-doe.jpg',
      description:
        'John is passionate about bringing people together. As the organizer of our Community Meetup, he ensures a welcoming space for networking and collaboration.'
    },
    {
      name: 'Jane Smith',
      role: 'Tech Workshop Host',
      image: '/images/about/jane-smith.jpg',
      description:
        'Jane is a tech enthusiast dedicated to knowledge-sharing. She organizes hands-on coding workshops that allow developers to explore new technologies.'
    },
    {
      name: 'GreenTeam',
      role: 'Park Cleanup Organizers',
      image: '/images/about/greenteam.jpg',
      description:
        'The GreenTeam is committed to environmental sustainability. They lead initiatives like park cleanups to maintain our shared green spaces.'
    },
    {
      name: 'Readers Club',
      role: 'Book Fair Hosts',
      image: '/images/about/readers-club.jpg',
      description:
        'The Readers Club loves fostering literary engagement. The book fair offers space for book lovers to meet authors and explore diverse genres.'
    },
    {
      name: 'ActiveLife',
      role: 'Charity Run Organizers',
      image: '/images/about/activelife.jpg',
      description:
        "ActiveLife motivates the community to stay active while making a difference. Their charity run raises funds for children's education."
    },
    {
      name: 'Arts United',
      role: 'Art Exhibition Coordinators',
      image: '/images/about/arts-united.jpg',
      description:
        'Arts United celebrates creative expression by organizing exhibitions that showcase emerging local artists.'
    }
];

function getAllOrganisers() {
  return organizers;
}

module.exports = {
  getAllOrganisers
};
