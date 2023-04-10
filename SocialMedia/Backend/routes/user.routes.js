const { Router } = require("express");
const { media, postmedia, mediaput,mediadelete } = require("../controller/user.controller");
require("dotenv").config();

const router = Router();
// Retrieve a user by id.
router.get("/", media)
// post- create a new user
router.post("/", postmedia);
//update
router.put("/", mediaput);
//delete
router.delete("/", mediadelete)
module.exports= router