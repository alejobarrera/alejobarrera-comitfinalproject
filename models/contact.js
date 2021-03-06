var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema ({
    firstname: {
        type: String,
        required: [true, 'Firstname is required.']
    },
    lastname: {
        type: String,
        required: [true, 'Lastname is required.']
    },
    phone: {        
        type: String,
        required: [true, 'Phone is required.']
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'Email is required.'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Username must be a valid email address']

    },
    subject: {
        type: String,
        required: [true, 'Subject is required.']
    },
    comment: {
        type: String,
        required: [true, 'Comment or message is required.']
    },
    status: {
        type: String,
        required: [true, 'Status is required.']
    },
    answer: {
        type: String
    },
},
{
    timestamps: true
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;