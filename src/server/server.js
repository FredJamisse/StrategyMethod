const express = require("express");
const routes = require("../routes/routes");

const app = express();
app.use(express.json());

// Prefixo único para API (boa prática)
app.use("/api", routes);

// Healthcheck simples
app.get("/", (req, res) => res.send("AP online ✅"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 AP a correr em http://localhost:${PORT}`);
});
