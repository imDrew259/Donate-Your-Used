/* Database configuration */

const { connect, connection } = require("mongoose");

const configDB = (_) => {
  const mongoURI = process.env.mongoDBURI;

  try {
    connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error("Initial Database Connection Error!", err);
  }

  connection.on("connected", (_) => console.log("Database connected"));

  connection.on("error", (err) =>
    console.error("Database Connection Error!\n", err)
  );
};

module.exports = {
  configDB,
};
