// src/services/ActivityService.js
const ScenarioFactory = require("../factory/ScenarioFactory");
const ActivityRepo = require("../repositories/ActivityRepository");
const AnalyticsRepo = require("../repositories/AnalyticsRepository");

class ActivityService {
  static async getConfig() {
    return { message: "Configuração da atividade" };
  }

  static async getParams(activityId) {
    const activity = ActivityRepo.getById(activityId);
    const scenario = ScenarioFactory.create(activity);
    return {
      activity,
      scenario: scenario.getDescription()
    };
  }

  static async deploy(activityId) {
    const activity = ActivityRepo.getById(activityId);
    const scenario = ScenarioFactory.create(activity);
    return scenario.render();
  }

  static async saveAnalytics(data) {
    return AnalyticsRepo.save(data);
  }

  static async getAnalytics() {
    return AnalyticsRepo.findAll();
  }
}

module.exports = ActivityService;
