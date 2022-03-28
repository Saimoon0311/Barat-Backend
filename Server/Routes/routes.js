const express = require("express");
const Router = express.Router();
const Controller = require("../controller/areaController");
Router.get("/", (req, res) => res.send("hello"));

Router.post("/api/area/createArea", Controller.addAreas);
Router.get("/api/getAreas", Controller.getAreas);
// Router.put("/api/user/update/:id", Controller.updateuser);
// Router.delete("/api/user/delete/:id", Controller.deleteuser);

module.exports = Router;
