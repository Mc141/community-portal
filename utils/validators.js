function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[0-9+\-\s]{7,15}$/.test(phone);
}

function isNotEmpty(value) {
  return value && value.trim().length > 0;
}

module.exports = {
  isValidEmail,
  isValidPhone,
  isNotEmpty
};
