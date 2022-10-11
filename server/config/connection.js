const mongoose = require("mongoose");

var username = encodeURIComponent("testing1");
var password = encodeURIComponent("elizebath123");
var dbName = "deepThoughts";
var host = encodeURIComponent("cluster0.jnwmpjo.mongodb.net");

const DATABASE_URI = `mongodb+srv://${username}:${password}@${host}/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(DATABASE_URI || "mongodb://localhost/deep-thoughts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
