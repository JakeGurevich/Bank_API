import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
