import sequelize from "./mysql.js";
import { DataTypes } from "sequelize";

const table = {
  id: {
    type: DataTypes.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  created_at: {
    type: DataTypes.DATE(0),
    allowNull: false,
  },
};

const articles = sequelize.define("articles", table, {
  freezeTableName: true,
  createdAt: false,
  updatedAt:false
});

// articles.sync(); // 需要await 之后 了 { force: true } 选项，Sequelize 将删除现有表并重新创建它们

export { articles };
