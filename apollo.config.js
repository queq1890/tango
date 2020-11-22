module.exports = {
  client: {
    name: 'client',
    includes: ['src/**/*.ts'],
    tagName: 'gql',
    addTypename: true,
    service: {
      name: 'server',
      url: 'http://localhost:4000/graphql',
    },
  },
};
