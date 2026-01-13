// src/scenarios/ScenarioSequencia.js
const BaseScenario = require("./BaseScenario");
const SequenciaStrategy = require("../strategies/SequenciaStrategy");

class ScenarioSequencia extends BaseScenario {
  constructor(activity) {
    super(activity, new SequenciaStrategy());
  }
}

module.exports = ScenarioSequencia;
