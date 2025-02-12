import Booking from "./models/Booking.js";  // Import Booking Model

const resolvers = {
  Query: {
    users: async () => {
      // Your existing logic to fetch users
    },
    bookings: async () => {
      return await Booking.find();  // ✅ Fetch bookings from MongoDB
    },
  },
  Mutation: {
    addUser: async (_, { name, email, password }) => {
      // Your existing logic to add a user
    },
    addBooking: async (_, { name, destination, date, price }) => {
      const newBooking = new Booking({ name, destination, date, price });
      await newBooking.save();
      return newBooking;
    },
    deleteBooking: async (_, { id }) => {
      await Booking.findByIdAndDelete(id);
      return true;
    },
  },
};

export default resolvers;
