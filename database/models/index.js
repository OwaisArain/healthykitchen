

const dbConfig = require("../../database/configs/db.config");

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admin = require("./admin.model")(sequelize, Sequelize);
db.adminSessions = require("./admin.sessions.model")(sequelize, Sequelize);
db.customers = require("./customers.model")(sequelize, Sequelize);
db.product = require("./product.model")(sequelize, Sequelize);
db.order = require("./order.model")(sequelize, Sequelize);
module.exports = db;