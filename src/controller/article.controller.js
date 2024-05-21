const responseHandler = require('../utils/response-handler')
const articleService = require('../service/article.service')

async function create(req, res) {
  const { title, content, uuid } = req.body
  try {
    const data = await articleService.create(title, content, uuid)
    responseHandler.success(res, data)
  } catch (err) {
    responseHandler.error(res, err.meaasge)
  }
}

async function getList(req, res) {
  const { page = 1, pageSize = 10 } = req.query
  try {
    const data = await articleService.getList(page, pageSize)
    responseHandler.success(res, data)
  } catch (err) {
    responseHandler.error(res, err.meaasge)
  }
}

async function getInfo(req, res) {
  const { id } = req.params
  try {
    const data = await articleService.getInfo(id)
    responseHandler.success(res, data)
  } catch (err) {
    responseHandler.error(res, err.meaasge)
  }
}

async function update(req, res) {
  const { id } = req.params
  const { title, content } = req.body
  try {
    const data = await articleService.update(id, title, content)
    responseHandler.success(res, data)
  } catch (err) {
    responseHandler.error(res, err.meaasge)
  }
}

async function deleteRecord(req, res) {
  const { id } = req.params
  try {
    const data = await articleService.deleteRecord(id)
    responseHandler.success(res, data)
  } catch (err) {
    responseHandler.error(res, err.meaasge)
  }
}

async function getFollowerList(req, res) {
  const { id } = req.params
  try {
    const data = await articleService.getFollowerList(id)
    responseHandler.success(res, data)
  } catch (err) {
    responseHandler.error(res, err.meaasge)
  }
}

module.exports = {
  create,
  getList,
  getInfo,
  update,
  deleteRecord,
  getFollowerList,
}
