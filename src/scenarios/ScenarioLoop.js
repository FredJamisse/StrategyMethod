// src/scenarios/ScenarioLoop.js
const BaseScenario = require("./BaseScenario");
const LoopStrategy = require("../strategies/LoopStrategy");

class ScenarioLoop extends BaseScenario {
  constructor(activity) {
    super(activity, new LoopStrategy());
  }
}

module.exports = ScenarioLoop;
