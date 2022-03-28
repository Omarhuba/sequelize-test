const { Model, DataTypes } = require("sequelize");
const sequelize = require('../database/database')

class messages extends Model{}

messages.init({
   
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },

}, {
    sequelize,
    modelName:'messages',
    timestamps: false

})

module.exports = messages