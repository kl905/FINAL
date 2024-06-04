const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)
    try {
         // Bearer asfasnfkajsfnjk
        if (!token) {
            return res.status(401).json({message: "Нет токена"})
        }
        req.user = jwt.verify(token, process.env.SECRET_KEY)
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован auth MW"})
    }
};