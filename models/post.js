var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema ({
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
    author: {        
        type: String
    }, 
    authoremail: {
        type: String,
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Username must be a valid email address']
    },
    source: {
        type: String
    },
    sourceurl: {
        type: String,
        lowercase: true,
        trim: true
    },

},
{
    timestamps: true
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;