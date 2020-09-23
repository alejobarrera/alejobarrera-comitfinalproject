var services = require('../services')

function isAuth (req, res, next) {
    if(!req.headers.authorization) {
        return res.status(403).send({message: 'Do not have athorization.'})
    }

    const token = req.headers.authorization.split(" ")[1]
    
    services.decodeToken(token)
        .then(response => {
            req.user = response
            next()
        })
        .chatch(response => {
            res.status(response.status)
        })
}

module.exports = isAuth