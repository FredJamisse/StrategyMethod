// src/scenarios/ScenarioCondicional.js
const BaseScenario = require("./BaseScenario");
const CondicionalStrategy = require("../strategies/CondicionalStrategy");

class ScenarioCondicional extends BaseScenario {
  constructor(activity) {
    super(activity, new CondicionalStrategy());
  }
}

module.exports = ScenarioCondicional;
