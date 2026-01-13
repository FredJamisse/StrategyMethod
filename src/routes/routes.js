const express = require("express");
const ActivityController = require("../controllers/ActivityController");

const router = express.Router();

/**
 * 5 endpoints fixos (nesta fase com respostas simples):
 * - config_url
 * - json_params_url
 * - deploy_url
 * - analytics_url (POST)
 * - get_analytics_url (GET)
 */

router.get("/config_url", (req, res) => {
  res.json({ endpoint: "config_url", status: "ok", note: "Módulo 1 (placeholder)" });
});

router.get("/json_params_url", (req, res) => {
  const { activityID } = req.query;
  res.json({ endpoint: "json_params_url", status: "ok", activityID: activityID || null });
});
router.post("/save_config", ActivityController.saveConfig);
router.get("/deploy_url", (req, res) => {
  const { activityID, inveniraStdID } = req.query;
  res.send(`
    <html>
      <body>
        <h1>deploy_url (Módulo 1)</h1>
        <p>activityID: ${activityID || "(não fornecido)"}</p>
        <p>inveniraStdID: ${inveniraStdID || "(não fornecido)"}</p>
      </body>
    </html>
  `);
});

router.post("/analytics_url", (req, res) => {
  res.json({ endpoint: "analytics_url", status: "ok", received: req.body });
});

router.get("/get_analytics_url", (req, res) => {
  const { activityID } = req.query;
  res.json({ endpoint: "get_analytics_url", status: "ok", activityID: activityID || null, analytics: [] });
});

module.exports = router;
