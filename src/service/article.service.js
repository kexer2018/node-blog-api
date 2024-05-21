const Article = require('../database/modules/article.module')
const ArticleFollower = require('../database/modules/article-follower.module')

async function create(title, content, uuid) {
  try {
    const foundArticle = await Article.findOne({
      where: {
        uuid,
      },
    })

    if (foundArticle) {
      // 更新的逻辑
      await Article.update(
        {
          title,
          content,
          updatedAt: new Date(),
        },
        {
          where: {
            id: foundArticle.id,
          },
        }
      )
    } else {
      await Article.create({
        articleId: uuid,
        title,
        content,
        createdBy: uuid,
      })
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

async function getList(page, pageSize) {
  const offset = (page - 1) * pageSize
  const limit = pageSize
  try {
    const data = await Article.findAndCountAll({
      offset,
      limit,
    })
    return data
  } catch (err) {
    throw new Error(err.message)
  }
}

async function getInfo(id) {
  try {
    const data = await Article.findOne({
      where: {
        id,
      },
    })
    return data
  } catch (err) {
    throw new Error(err.message)
  }
}

async function update(id, title, content) {
  try {
    const data = await Article.update(
      {
        title,
        content,
        updatedAt: new Date(),
      },
      {
        where: {
          id,
        },
      }
    )
    return data
  } catch (err) {
    throw new Error(err.message)
  }
}

async function deleteRecord(id) {
  try {
    const data = await Article.destroy({
      where: {
        id,
      },
    })
    return data
  } catch (err) {
    throw new Error(err.message)
  }
}

// 获取指定文章的所有关注者
async function getFollowerList(id) {
  try {
    const data = await ArticleFollower.findAll({
      where: {
        articleId: id,
      },
    })
    return data
  } catch (err) {
    throw new Error(err.message)
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
