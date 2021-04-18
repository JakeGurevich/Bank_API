import express from "express";
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  removeUser,
  makeTransfer,
} from "../utils.js";

const router = express.Router();

router.get("/", (req, res) => {
  const users = getUsers();
  res.send(users);
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = getUser(id);
  res.send(user);
});
export default router;

router.post("/", (req, res) => {
  const add = addUser(req.body);
  console.log(add);
  res.send(add);
});
router.delete("/:id", (req, res) => {
  const remove = removeUser(req.params.id);
  console.log(remove);
  res.send(remove);
});
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id !== "transfer") {
    const patchResult = updateUser(id, req.body);
    res.send(patchResult);
  } else {
    const transfer = makeTransfer(req.body);
    res.send(transfer);
  }
});
