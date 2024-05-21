const jwt = require('jsonwebtoken')
const crypto = require('node:crypto')
const dotenv = require('dotenv')
const User = require('../database/modules/user.module')
const ArticleFollower = require('../database/modules/article-follower.module')
const Article = require('../database/modules/article.module')
// const redis = require('../database/redis')

dotenv.config({ path: '.env' })

async function register(username, password, email) {
  try {
    const foundUser = await User.findOne({ where: { email } })
    if (foundUser) {
      throw new Error('User already exists')
    }

    const hashPassword = crypto
      .createHash('sha256')
      .update(password)
      .digest('hex')

    await User.create({
      username,
      password: hashPassword,
      email,
    })
    return '注册成功'
  } catch (err) {
    throw new Error(err.message)
  }
}

async function login(username, password) {
  try {
    const user = await User.findOne({ where: { username } })
    if (!user) {
      throw new Error('User not found')
    }
    const hashPassword = crypto
      .createHash('sha256')
      .update(password)
      .digest('hex')
    if (hashPassword !== user.password) {
      throw new Error('Wrong password')
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    )
    const data = {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    }
    return data
  } catch (err) {
    throw new Error(err.message)
  }
}

async function update(id, username, password, email) {
  const foundUser = await User.findOne({ where: { id } })

  if (!foundUser) {
    throw new Error('User not found')
  }

  if (username) {
    foundUser.username = username
  }

  if (password) {
    const hashPassword = crypto
      .createHash('sha256')
      .update(password)
      .digest('hex')
    foundUser.password = hashPassword
  }

  if (email) {
    foundUser.email = email
  }

  try {
    await foundUser.save()
    return '用户信息修改成功'
  } catch (error) {
    throw new Error('用户信息修改失败', error.message)
  }
}

async function toggleFavorite(articleId, userId, action) {
  try {
    const foundArticle = await Article.findOne({
      where: {
        id: articleId,
      },
    })

    if (!foundArticle) {
      throw new Error('文章不存在')
    }
    if (action === 'add') {
      // 检查是否点赞过
      const existFollow = await ArticleFollower.findOne({
        where: {
          userId,
          articleId,
        },
      })

      if (existFollow) {
        throw new Error('用户已经点赞过该文章')
      }

      await ArticleFollower.create({
        userId,
        articleId,
      })
    } else if (action === 'remove') {
      await ArticleFollower.destroy({
        where: {
          userId,
          articleId,
        },
      })
    }
    return '操作成功'
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  register,
  login,
  update,
  toggleFavorite,
}
