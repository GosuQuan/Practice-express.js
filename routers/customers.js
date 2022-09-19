const express = require("express");
const cusRouter = express.Router();

cusRouter.get("/", (req, res) => {
  res.render("fuck");
  console.log(1);
});
cusRouter.get("/new", (req, res) => {
  res.render("info/new",{firstname:""});
});
cusRouter.post("/", (req, res) => {
    console.log(req.body.firstName);
    res.send("hi")
})
cusRouter
  .route("/:id")
  .get((req, res) => {
    res.send(`Get Userid ${req.params.id}`);
    console.log(req.customer);
  })
  .put((req, res) => {
    res.send(`Update Userid ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Detele Userid ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`Insert Userid ${req.params.id}`);
  });
const customers = [{ name: "Kingsley" }, { name: "Sally" }];
cusRouter.param("id", (req, res, next, id) => {
  req.customer = customers[id];
  //next() means that the middleware between the request and the response
  // and when refers to "next"parameter. it will cause the internet to refresh until u use the fun next()
  next();
});

module.exports = cusRouter;
