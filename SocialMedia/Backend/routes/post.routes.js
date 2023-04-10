const {  Router} = require("express");
const {social,socialpost, socialput,socialdelete,likepost,unlikepost, analyticsget1,analyticsget2}=require("../controller/post.controller") 
require("dotenv").config();
const PostRouter = Router();
//get
 PostRouter.get("/",social)
//post
PostRouter.post("/", socialpost);
//put
PostRouter.put("/", socialput);
//delete
PostRouter.delete("/", socialdelete);
//post
PostRouter.post("/", likepost);
//post
PostRouter.post("/", unlikepost);
//get
PostRouter.get("/", analyticsget1);
//get
PostRouter.get("/", analyticsget2)
module.exports= PostRouter;