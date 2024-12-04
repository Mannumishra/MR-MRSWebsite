const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageInquirySchema = new Schema({
  packageCity: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const PackageInquery = mongoose.model('PackageInquiry', PackageInquirySchema);

module.exports = PackageInquery
