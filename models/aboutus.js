var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aboutusSchema = new Schema ({
    whatwedo: {
        type: String,
        required: [true, 'What we do is required.']
    },
    ourmission: {
        type: String,
        required: [true, 'Our mission is required.']
    },
    ourvission: {
        type: String,
        required: [true, 'Our vission is required.']
    },
    headline: {
        type: String,
        required: [true, 'Headline is required.']
    },
    abstract: {
        type: String,
        required: [true, 'Abstract is required.']
    },
},
{
    timestamps: true
});

var Aboutus = mongoose.model('Aboutus', aboutusSchema);

module.exports = Aboutus;