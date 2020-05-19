// this fle connects to the remote prisma DB and gives us the ability to query it with JS
const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  //endpoint: 'https://eu1.prisma.sh/hernan-pereyra-9e3b34/sick-fit/dev',
  //secret: 'elsecretoprism4',
  debug: false
});

module.exports = db;