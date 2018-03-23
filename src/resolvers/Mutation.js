const { Route } = require("../models/Route");

async function createRoute(parent, args, context, info) {
  const {
    description,
    toLongitude,
    toLatitude,
    fromLongitude,
    fromLatitude
  } = args;
  const res = await Route.findOrCreate({
    where: {
      description,
      toLongitude,
      toLatitude,
      fromLongitude,
      fromLatitude
    }
  });
  return res[0];
}

module.exports = {
  createRoute
};
