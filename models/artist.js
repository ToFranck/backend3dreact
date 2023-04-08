const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cd : { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Artist", artistSchema);