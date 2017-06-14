let db = require('../db/gb')

module.exports = (router) => {
  // 登录
  // status: 0 --> 用户不存在, 1 --> 登录成功, 2 --> 登录失败
  router.post('/login', (req, res, next) => {
    let username = req.body.username
    let password = req.body.password
    console.log('/login username=' + username + ' password=' + password)

    db.getUser(username, (user) => {
      console.log(user)
      if (user === null) {
        // 用户不存在
        res.send({
          status: 0
        })
      } else {
        // 登录
        if (user.password === password) {
          // 登录成功
          res.send({
            status: 1,
            data: user
          })
        } else {
          // 登录失败
          res.send({
            status: 2
          })
        }

      }
    })
  })

  // 注册
  // status: 1--> 注册成功, 0 --> 该用户已注册, 2 --> 两次密码不一致
  router.post('/register', (req, res, next) => {
    let username = req.body.username
    let password = req.body.password
    let checkPassword = req.body.checkPassword
    console.log('/login username=' + username + ' password=' + password + ' checkPass=' + checkPassword)

    if (password === checkPassword) {
      db.getUser(username, (user) => {
        if (user === null) {
          db.addUser({username: username, password: password}, (user) => {
            res.send({
              status: 1,
              data: user
            })
          })
        } else {
          res.send({
            status: 0
          })
        }
      })
    } else {
      res.send({
        status: 2
      })
    }
  })

}