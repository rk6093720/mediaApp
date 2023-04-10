const express = require("express");
const cors = require("cors");
const userRoute= require("./routes/user.routes");
const postRoute = require("./routes/post.routes");
const analyticsRoutes = require("./routes/anylatics.routes");
const { attachment } = require("./config/db");
require("dotenv").config();
const port_no = process.env.PORT || 8080;
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("welcome to our social media app")
})

app.use("/users", userRoute);
app.use("/users/:id", userRoute);
app.use("/analytics/users",analyticsRoutes);
app.use("/analytics/users/top-active",analyticsRoutes);
app.use("/users", postRoute);
app.use("/users/:id",postRoute);
app.use("//posts/:id/like",postRoute)
app.use("/posts/:id/unlike",postRoute);
app.use("/analytics/posts",postRoute);
app.use("/analytics/posts/top-liked", postRoute)
app.listen(port_no, async()=>{
    try {
        await attachment;
        console.log("DATABASE CONNECTION IS SUCCESSFULLY");
    } catch (err) {
        console.log("error name",err.message);
    }
    console.log("Port",port_no)
})