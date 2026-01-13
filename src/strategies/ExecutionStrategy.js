class ExecutionStrategy {
  execute(code, scenario) {
    throw new Error("execute() deve ser implementado");
  }
}

module.exports = ExecutionStrategy;