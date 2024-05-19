// models/articleFollower.js
const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')
const User = require('./user.module')
const Article = require('./article.module')

const ArticleFollower = sequelize.define(
  'ArticleFollower',
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Article,
        key: 'id',
      },
    },
  },
  {
    tableName: 'article_followers',
    timestamps: true,
  }
)

module.exports = ArticleFollower
