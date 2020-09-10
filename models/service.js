var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema ({
    headline: {
        type: String,
        required: [true, 'Headline is required.']
    },
    abstract: {
        type: String,
        required: [true, 'Abstract is required.']
    },
    image: {        
        type: String,
        required: [true, 'Image is required.']
    },
    fulltext: {        
        type: String,
        required: [true, 'Fulltext is required.']
    },    
},
{
    timestamps: true
});

var Service = mongoose.model('Service', serviceSchema);

module.exports = Service;