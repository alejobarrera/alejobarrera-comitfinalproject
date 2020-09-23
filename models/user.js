var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema ({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, 'Email is required.'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Username must be a valid email address']
    },
    password: {
        type: String,
        select: false, // No send information in queries
    },
    firstname: {
        type: String,
        required: [true, 'Question is required.']
    },
    lastname: {
        type: String,
        required: [true, 'Question is required.']
    },
    avatar: {
        type: String,
        required: [true, 'Answer is required.']
    },
    signupdate: {
        type: Date,
        default: Date.now(),
    },
    lastlogin: Date,
},
{
    timestamps: true
});

UserSchema.pre('save', (next) => {
    let user = this
    if (!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err,salt) => {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err)

            user.password = hash
            next()
        })
    })
})

var User = mongoose.model('User', UserSchema);

module.exports = User;