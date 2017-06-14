/**
 * 连接数据库
 */

let mongoose = require('mongoose')

exports.mongoose = mongoose



/**
 * 定义连接方法
 */
let connect = () => {
  // 给mongoose添加Promise方法
  mongoose.Promise = global.Promise;
  // 连接数据库
  mongoose.connect('mongodb://localhost/tangchen')

  // 获得connection对象
  let connection = mongoose.connection

  // 监听打开连接
  connection.once('open', function () {
    console.log('connect mongodb successful')
  })

  // 设置连接错误的监听
  connection.on('error', console.error.bind(console, 'connection error:'))
}

exports.connect = connect


/**
 * 定义关闭连接的方法
 */
let disconnect = () => {
  mongoose.disconnect()
}
exports.disconnect = disconnect