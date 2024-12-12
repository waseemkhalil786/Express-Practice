import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  console.log(req);
  res.send("hi my first request kjjfjfrunning");
});
app.listen(PORT, () => console.log("server is runing with port" + PORT));
