const express = require("express");
const cusRouter  = require("./routers/customers")
const app = express();
var router = express.Router();
app.set("view engine", "ejs");
app.use(logger)
app.use(express.static('public'))

// app.use(express.urlencoded({extended:true}))
// if not use, it can not read the property of the ..ejs 
// and if you want to read. you should use the urlencoded to encode the ejs so that express could understand and read the property 




function logger(req,res,next){
  console.log(req.originalUrl)
  next()
}

router.get("/user/about", (req, res) => {
  res.render("about")
});
// app.use("/",router)
app.use("/customer", cusRouter);
 //the use of router means that u can seperate with your website through a single web server
// a slash means that the website is built with primary.
// and the root is to connect with the router built with another page
app.listen(3000);
