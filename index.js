const  { ApolloServer } = require("apollo-server")

const gql = require("graphql-tag")

const typeDefs = gql`
type Query {

    Hi:String!
}
`

const resolvers = {
    Query :{
        Hi:() => "hello world!!!"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen({
    port:5000
}).then(res => {
    console.log(`server startes on ${res.url}`)
})