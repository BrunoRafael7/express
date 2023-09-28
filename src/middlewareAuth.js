const jwtService = require('jsonwebtoken')
module.exports = async (req, res, next) => {
    const route = req.path
    const nonSecurityRoutes = ['/register/user', '/login', '/about']
    if (nonSecurityRoutes.includes(route) || route.includes('view')) {
        return next()
    }

    let token = req.headers.authorization
    if (!token) {
        res.status(401).json({message: "Usuário não autorizado"})
        return
    }
    token = token.split(' ')[1]
    const secret = process.env.SECRET
    try {
        await jwtService.verify(token, secret)
        return next()
    } catch (err) {
        res.status(401).json({message: "Usuário não autorizado"})
        return
    }
}