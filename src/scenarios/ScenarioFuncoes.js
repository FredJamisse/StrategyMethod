// src/scenarios/ScenarioFuncoes.js
const BaseScenario = require("./BaseScenario");
const FuncoesStrategy = require("../strategies/FuncoesStrategy");

class ScenarioFuncoes extends BaseScenario {
  constructor(activity) {
    super(activity, new FuncoesStrategy());

    // Objetivo pedagógico específico deste cenário
    // Ex.: o aluno deve definir pelo menos N funções
    this.goal = activity.goal || 1;
  }
}

module.exports = ScenarioFuncoes;
