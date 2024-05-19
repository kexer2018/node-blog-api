const responseHandler = require('../utils/response-handler')
const userService = require('../service/user.service')

async function register(req, res) {
  const { username, password, email } = req.body
  try {
    const token = await userService.register(username, password, email)
    responseHandler.success(res, token)
  } catch (err) {
    responseHandler.error(res, err)
  }
}

async function login(req, res) {
  const { username, password } = req.body
  try {
    const data = await userService.login(username, password)
    responseHandler.success(res, data)
  } catch (err) {
    responseHandler.error(res, err)
  }
}

async function update(req, res) {
  const { id } = req.params
  const { username, password, email } = req.body

  try {
    const data = await userService.update(id, username, password, email)
    responseHandler.success(res, data)
  } catch (err) {
    responseHandler.error(res, err)
  }
}

async function toggleFavorite(req, res) {
  const { id } = req.params
  const { userId, action } = req.body
  try {
     const data = await userService.toggleFavorite(id, userId, action)
    responseHandler.success(res, data)
  } catch (err) {
    responseHandler.error(res, err)
  }
}

module.exports = {
  register,
  login,
  update,
  toggleFavorite,
}
