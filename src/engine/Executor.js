class Executor {
  constructor(scenario) {
    this.scenario = scenario;
    this.position = { x: 0, y: 0 };
    this.steps = 0;
    this.errors = 0;
  }

  execute(codeLines) {
    for (const line of codeLines) {
      try {
        this.executeLine(line.trim());
      } catch (e) {
        this.errors++;
      }
    }

    return {
      steps: this.steps,
      errors: this.errors,
      success: this.scenario.isGoalReached(this.position)
    };
  }

  executeLine(line) {
    switch (line) {
      case "mover()":
        this.moveForward();
        break;
      case "direita()":
        this.turnRight();
        break;
      case "esquerda()":
        this.turnLeft();
        break;
      default:
        throw new Error("Comando inválido");
    }
  }

  moveForward() {
    this.steps++;
    this.position.x++;
  }

  turnRight() {}
  turnLeft() {}
}

module.exports = Executor;
