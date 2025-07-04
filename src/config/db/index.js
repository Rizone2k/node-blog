const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/blog_education_dev")
    .then(() => console.log("Connected!"))
    .catch((err) => console.log("[ERROR]", err));
}

module.exports = { connect };
