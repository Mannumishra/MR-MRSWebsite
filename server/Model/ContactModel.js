const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email uniqueness
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
