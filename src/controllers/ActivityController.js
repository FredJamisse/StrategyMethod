
const Executor = require("../engine/Executor");
const ActivityRepo = require("../repositories/ActivityRepository");
const AnalyticsRepo = require("../repositories/AnalyticsRepository");

const activityRepo = new ActivityRepo();
const analyticsRepo = new AnalyticsRepo();

class ActivityController {

  static async getConfig(req, res) {
    res.json({
      message: "Configuração do Activity Provider",
      availableActivities: ["L1", "L2", "L3"]
    });
  }
  static async saveConfig(req, res) {
  try {
    const activity = req.body;
    

    // validação mínima
    if (!activity.id || !activity.type) {
      return res.status(400).json({ error: "id e type são obrigatórios" });
    }

    await activityRepo.create(activity);

    // ⬇️ ESTA LINHA É CRÍTICA
    return res.json({ status: "ok" });

  } catch (err) {
    console.error("Erro em saveConfig:", err);
    return res.status(500).json({ error: "Erro ao guardar atividade" });
  }
}



  static async getParams(req, res) {
  try {
    const { activityID } = req.query;

    if (!activityID) {
      return res.status(400).json({ error: "activityID é obrigatório" });
    }

    const activity = await activityRepo.findById(activityID);

    if (!activity) {
      return res.status(404).json({ error: "Atividade não encontrada" });
    }

    return res.json(activity);

  } catch (err) {
    console.error("Erro em getParams:", err);
    return res.status(500).json({ error: err.message });
  }
}


  static async deploy(req, res) {
    const { activityID } = req.query;
    const activity = await activityRepo.findById(activityID);
    res.send(`
      <h1>${activity.title}</h1>
      <p>${activity.description}</p>
      <p><em>Interface da atividade (simulada)</em></p>
    `);
  }

  static async saveAnalytics(req, res) {
    await analyticsRepo.save(req.body);
    res.json({ status: "ok" });
  }

  static async getAnalytics(req, res) {
    const { activityID } = req.query;
    const data = await analyticsRepo.findByActivity(activityID);
    res.json(data);
  }
  static async execute(req, res) {
    const { activityId, code } = req.body;

    const scenario = ScenarioFactory.create(activityId);
    const executor = new Executor(scenario);

    const result = executor.execute(code.split("\n"));

    res.json({
      success: result.success,
      steps: result.steps,
      errors: result.errors
    });
  }
}

module.exports = ActivityController;
