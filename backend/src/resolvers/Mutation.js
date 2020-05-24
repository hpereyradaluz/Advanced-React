const Mutations = {
  async createItem(parent, args, ctx, info) {
    // check logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    return item;
  },
  // createDog(parent, args, ctx, info){
  //   global.dogs = global.dogs || [];
  //   const newDog = { name: args.name};
  //   global.dogs.push(newDog);
  //   return newDog;
  // }
  updateItem(parent, args, ctx, info) {
    // first take a copy of the updates
    const updates = { ...args };
    // remove the ID from the updates
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id,
      },
      info,
    });
  },
};

module.exports = Mutations;
