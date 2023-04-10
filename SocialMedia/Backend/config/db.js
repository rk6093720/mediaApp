const mongoose = require("mongoose");
require("dotenv").config();
const attachment = mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = {
    attachment
}