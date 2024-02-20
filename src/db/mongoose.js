// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb+srv://digitansolutions:digitan123@digitan-cluster.44m5vvd.mongodb.net/stockapp?retryWrites=true&w=majority";

// Wait for database to connect, logging an error if there is a problem
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB, options);
}