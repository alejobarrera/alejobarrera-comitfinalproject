var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema ({
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

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;