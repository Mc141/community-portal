const contactSubmissions = [];

function addSubmission(submission) {
  contactSubmissions.push({ ...submission, timestamp: new Date() });
}

function getSubmissions() {
  return contactSubmissions;
}

module.exports = {
  addSubmission,
  getSubmissions
};
