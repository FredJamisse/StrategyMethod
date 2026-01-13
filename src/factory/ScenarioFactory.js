// src/factory/ScenarioFactory.js
const ScenarioSequencia = require("../scenarios/ScenarioSequencia");
const ScenarioCondicional = require("../scenarios/ScenarioCondicional");
const ScenarioLoop = require("../scenarios/ScenarioLoop");

class ScenarioFactory {
  static create(activity) {
    switch (activity.type) {
      case "SEQUENCIA":
        return new ScenarioSequencia(activity);
      case "CONDICIONAL":
        return new ScenarioCondicional(activity);
      case "LOOP":
        return new ScenarioLoop(activity);
        case "FUNCOES":
        return new ScenarioFuncoes(activity);
      default:
        throw new Error("Tipo de cenário desconhecido");
    }
  }
}

module.exports = ScenarioFactory;
