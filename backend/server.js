const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const doshaRoutes = require("./routes/doshaRoutes");
app.use("/api", doshaRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});