// src/scenarios/BaseScenario.js
class BaseScenario {
  constructor(activity, executionStrategy) {
    this.activity = activity;
    this.executionStrategy = executionStrategy;

    // Exemplo de objetivo vindo da activity/config
    this.goal = activity.goal || 3;
  }

  run(code) {
    return this.executionStrategy.execute(code, this);
  }
}

module.exports = BaseScenario;
