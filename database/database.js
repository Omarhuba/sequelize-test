const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('test-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './database/dev.sqlite'
})

module.exports = sequelize;