const jwt = require('jwt-simple')
const moment = require('moment')
const secret = 'MyPasswordToken'

function createToken (user) {
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    }

    return jwt.encode (payload, secret)
}

function decodeToken (token) {
    const decoded = new Promise((resolve, reject) =>{
        try{
            const payload =jwt.decode(token,secret)   
            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'The token was expired'
                }) 
            }

            resolve(payload.sub)

        } 
        catch (err){
            reject({
                status: 500,
                message: 'Invalid Token'
            })
        }
    })

    return decoded
}

module.exports = {
    createToken,
    decodeToken
}
