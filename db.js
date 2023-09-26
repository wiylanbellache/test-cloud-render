const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'blender', // Database name
  'blender_user', // User
  'WTYOSlOnEOKkkrGx1YDx9yqaUHjt2ozv', // Password
  {
    host: 'dpg-ck9d2370vg2c73djgn60-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
