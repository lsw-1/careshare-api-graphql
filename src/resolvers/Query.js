const { Route } = require("../models/Route");

async function routes(parent, args, context, info) {
  return await Route.findAll();
}
async function aRoute(parent, args, context, info) {
  const { id } = args;
  return await Route.find({ where: { id } });
}

module.exports = {
  routes,
  aRoute
};
