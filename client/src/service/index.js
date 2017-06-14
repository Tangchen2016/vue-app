/**
 * Created by 10613 on 2017/6/14.
 */
import axios from 'axios'

const ROOT_URL = 'http://localhost:3000'

export const getLogin = (formName) => axios({
  method: 'POST',
  url: ROOT_URL + '/login',
  data: {
    username: formName.username,
    password: formName.password
  }
})

export const getRegister = (formName) => axios({
  method: 'POST',
  url: ROOT_URL + '/register',
  data: {
    username: formName.username,
    password: formName.password,
    checkPassword: formName.checkPassword
  }
})

