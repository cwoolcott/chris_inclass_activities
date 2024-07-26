//const { gql } = require('apollo-server-express');

const typeDefs = `
    #Pretty Cool COmments!
    type Cars {
        id: ID
        make: String
        model: String
        sold: Boolean
        image: String
        year: String
        price: Int
    }

    #Query
    type Query {
        allCars: [Cars],
        getCarById(id:ID!): Cars
        getSoldCars(sold:Boolean!): [Cars]
    }

    #Mutation
    type Mutation {
        addCar(id: Int!, year: String!, make: String!, model: String!, price: Int!, image: String, sold: Boolean! ): Cars
        editCar(id: Int!, year: String!, make: String!, model: String!, price: Int!, image: String, sold: Boolean! ): Cars
    }
`;

module.exports = typeDefs;

