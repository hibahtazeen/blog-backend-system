const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Post = sequelize.define("Post", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

// relationship: one user → many posts
User.hasMany(Post);
Post.belongsTo(User);

module.exports = Post;