const mongoose = require('mongoose');

const BrandName = mongoose.Schema({
    name: {
        type: String,
        required: true  // Corrected typo here
    },
    data: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('name', BrandName);
