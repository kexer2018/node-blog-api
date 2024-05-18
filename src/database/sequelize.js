const {Sequelize} = require('sequelize');
const dotenv = require('dotenv')

dotenv.config({path: ".env"})

// 数据库配置信息
const database = process.env.DB_NAME || 'blog';
const username = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || 'root';
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '3306';

// 创建 Sequelize 实例并连接到 MySQL 数据库
const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: 'mysql'
});

module.exports = sequelize;

