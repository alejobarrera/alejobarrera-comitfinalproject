var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema ({
    headline: {
        type: String,
        required: [true, 'Headline is required.']
    },
    delivery: {
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
    contactname: {        
        type: String
    }, 
    contactemail: {
        type: String,
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Username must be a valid email address']
    },
    contactphone: {
        type: String
    },
},
{
    timestamps: true
});

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;