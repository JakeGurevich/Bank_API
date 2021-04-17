import express from "express";
import { getUsers, addUser, updateUser } from "../utils.js";

const router = express.Router();

router.get("/", (req, res) => {
  const users = getUsers();
  res.send(users);
});
export default router;

router.post("/", (req, res) => {
  const add = addUser(req.body);
  console.log(add);
  res.send(add);
});
router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const patch = updateUser(id, req.body);
  res.send(patch);
});
