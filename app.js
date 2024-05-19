/* eslint-disable no-unused-vars */
const express = require('express')
const dotenv = require('dotenv')
const app = express()

const sequelize = require('./src/database/sequelize')
const User = require('./src/database/modules/user.module')
const Article = require('./src/database/modules/article.module')
const ArticleFollower = require('./src/database/modules/article-follower.module')

const routes = require('./src/router')

dotenv.config({path: ".env"})

app.use(express.json())

app.use('/api', routes)

app.listen(process.env.PORT, async () => {
    try {
        await sequelize.sync({force: false}); // 设置为 true 将删除并重新创建表
        console.log('Database initialized successfully.');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
    console.log(`Server running on port ${process.env.PORT}`)
})
