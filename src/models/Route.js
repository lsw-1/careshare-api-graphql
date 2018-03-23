const Sequelize = require("sequelize");

const sequelize = new Sequelize("test_graph", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Route = sequelize.define("Route", {
  description: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  toLongitude: {
    type: Sequelize.FLOAT
  },

  toLatitude: {
    type: Sequelize.FLOAT
  },
  fromLongitude: {
    type: Sequelize.FLOAT
  },
  fromLatitude: {
    type: Sequelize.FLOAT
  }
});

Route.sync({ force: true }).then(() => {});

module.exports = {
  Route,
  sequelize
};
