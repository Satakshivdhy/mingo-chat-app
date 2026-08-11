import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Mingo Chat App Server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
