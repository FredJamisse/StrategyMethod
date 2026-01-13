// src/strategies/FuncoesStrategy.js
const ExecutionStrategy = require("./ExecutionStrategy");

class FuncoesStrategy extends ExecutionStrategy {
  execute(code, scenario) {
    let functionsDefined = 0;
    let errors = 0;

    for (const line of code) {
      if (line.trim().startsWith("function")) {
        functionsDefined++;
      } else if (line.trim() === "") {
        // ignora linhas vazias
      } else {
        // neste tipo de exercício, linhas fora de funções contam como erro
        errors++;
      }
    }

    return {
      success: functionsDefined >= scenario.goal,
      functionsDefined,
      errors
    };
  }
}

module.exports = FuncoesStrategy;
