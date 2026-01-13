const ExecutionStrategy = require("./ExecutionStrategy");

class CondicionalStrategy extends ExecutionStrategy {
  execute(code, scenario) {
    let steps = 0;
    let errors = 0;

    for (const cmd of code) {
      if (cmd.startsWith("if")) steps++;
      else errors++;
    }

    return {
      success: steps >= scenario.goal,
      steps,
      errors
    };
  }
}

module.exports = CondicionalStrategy;
