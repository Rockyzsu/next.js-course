// 数据库配置
// import dotenv from "dotenv";
import { Sequelize } from "sequelize";

// dotenv.config();
let env = process.env;
console.log('my env --------------')
// console.log(env);

let sequelize = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
  host: env.DB_HOST,
  port: env.DB_PORT,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

export default sequelize;
