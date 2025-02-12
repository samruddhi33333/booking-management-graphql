import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Booking {
    id: ID!
    name: String!
    destination: String!
    date: String!
    price: Float!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]  
    bookings: [Booking]  # ✅ Add this to match your query
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    addBooking(name: String!, destination: String!, date: String!, price: Float!): Booking
    deleteBooking(id: ID!): Boolean
  }
`;

export default typeDefs;
