import express from "express";
import { fetch, create, update, deleteUser } from "../controller/useController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllUsers", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id",deleteUser)
export default route;