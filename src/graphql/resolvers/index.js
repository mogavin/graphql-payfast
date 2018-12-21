const { mergeResolvers } = require('merge-graphql-schemas'),
produto = require('./produto'),
usuario = require('./usuario');

const resolvers = [produto, usuario];

module.exports = mergeResolvers(resolvers);
