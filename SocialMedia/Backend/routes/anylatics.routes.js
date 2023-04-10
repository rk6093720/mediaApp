const {Router} = require("express");
const { count,mediatotalcount } = require("../controller/analytics.controller")
require("dotenv").config();
const analyticsrouter  = Router();

analyticsrouter.get("/", count);
analyticsrouter.get("/", mediatotalcount)


module.exports= analyticsrouter;