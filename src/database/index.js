const sequelize = require("./sequelize");
const fs = require("node:fs/promises");
const path = require("node:path");

async function initDB() {
  try {
    const files = await fs.readdir(path.join(__dirname, "./scripts"));

    for (const file of files) {
      const filePath = path.join(__dirname, "./scripts", file);

      // 读取 SQL 文件内容
      const sql = await fs.readFile(filePath, "utf8");

      // 按分号拆分 SQL 文件内容成多个语句
      const sqlStatements = sql.split(';').filter(statement => statement.trim() !== '');

      // 逐条执行 SQL 语句
      for (const statement of sqlStatements) {
        await sequelize.query(statement);
        console.log(`Executed SQL statement: ${statement}`);
      }
    }
  } catch (error) {
    console.error("Error executing SQL scripts:", error);
  }
}

module.exports = initDB;
