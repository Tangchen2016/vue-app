"use strict";

/**
 * 数据库操作总接口
 */

let dao_user = require('./dao_user')


let data = {
  getUser(username, fn) {
    dao_user.getUser(username, (err, user) => {
      if (err) {
        throw err
      } else {
        fn(user)
      }
    })
  },

  addUser(user, fn) {
    dao_user.addUser(user, (err, user) => {
      if (err) {
        throw err
      } else {
        fn(user)
      }
    })
  }
}

module.exports = data
