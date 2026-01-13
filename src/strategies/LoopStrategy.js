const ExecutionStrategy = require("./ExecutionStrategy");

class LoopStrategy extends ExecutionStrategy {
  execute(code, scenario) {
    let steps = 0;
    let errors = 0;

    for (const cmd of code) {
      if (cmd.startsWith("repeat")) {
        const n = parseInt(cmd.match(/\d+/)[0]);
        steps += n;
      } else {
        errors++;
      }
    }

    return {
      success: steps >= scenario.goal,
      steps,
      errors
    };
  }
}

module.exports = LoopStrategy;
