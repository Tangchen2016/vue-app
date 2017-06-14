/**
 * 总路由
 */

let express = require('express')
let router = express.Router()
let user = require('./user')

/*router.get('/', (req, res, next) => {
  res.redirect('http://localhost:8080/#/')
  next()
})*/

user(router)



module.exports = router