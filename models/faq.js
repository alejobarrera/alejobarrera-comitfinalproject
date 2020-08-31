var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var faqSchema = new Schema ({
    question: {
        type: String,
        required: [true, 'Question is required.']
    },
    answer: {
        type: String,
        required: [true, 'Answer is required.']
    },
},
{
    timestamps: true
});

var Faq = mongoose.model('Faq', faqSchema);

module.exports = Faq;