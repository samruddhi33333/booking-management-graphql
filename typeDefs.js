import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Booking {
    id: ID!
    name: String!
    destination: String!
    date: String!
    price: Float!
  }

  type Query {
    bookings: [Booking]
    booking(id: ID!): Booking
  }

  type Mutation {
    addBooking(name: String!, destination: String!, date: String!, price: Float!): Booking
    updateBooking(id: ID!, name: String, destination: String, date: String, price: Float): Booking
    deleteBooking(id: ID!): String
  }
`;

export default typeDefs;
