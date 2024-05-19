// models/article.js
const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')
const User = require('./user.module')

const Article = sequelize.define(
  'Article',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    stars: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: 'articles',
    timestamps: true,
  }
)

module.exports = Article
