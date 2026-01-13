const ExecutionStrategy = require("./ExecutionStrategy");

class SequenciaStrategy extends ExecutionStrategy {
  execute(code, scenario) {
    let pos = 0;
    let errors = 0;

    for (const cmd of code) {
      if (cmd === "mover()") pos++;
      else errors++;
    }

    return {
      success: pos >= scenario.goal,
      steps: pos,
      errors
    };
  }
}

module.exports = SequenciaStrategy;