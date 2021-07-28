const { ApolloServer} = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

//server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

//inicializamos el server
server.listen().then( (url) => {
    console.log(`Servidor iniciado en la URL: ${url}`);
})