const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  // when the query is the de samen in my yoga and as it is in my prisma
  // i dont need to write this code
  // it serve if i dont need authentication and simpe mock up somethin righ now
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
};

module.exports = Query;
