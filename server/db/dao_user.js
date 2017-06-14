let connection = require('./connection')
let mongoose = connection.mongoose

/*Schema*/
let Schema = mongoose.Schema;
// 获得Schema类
let userSchema = new Schema({
  username: String,
  password: String
})

/*Model*/
// 获得Model类
let UserModel = mongoose.model('user', userSchema)

/**
 * 定义getUser()
 */
let getUser = (username, cb) => {
  UserModel.findOne({username: username}, cb)
}
exports.getUser = getUser

/**
 * 定义addUser
 */
let addUser = (user, cb) => {
  // 创建 model 实例
  let userModel = new UserModel(user)
  // 保存数据
  userModel.save(cb)
}
exports.addUser = addUser