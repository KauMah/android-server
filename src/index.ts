import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("looks like you're in luck!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
