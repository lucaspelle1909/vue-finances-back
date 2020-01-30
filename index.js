const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client/");

const resolvers = {
  Query: {
    user(parent, args, context, info){
      return prisma.user({ id: args.id })
    }
  }
}

const server = 

