class Simulator {
  constructor(scenario) {
    this.map = scenario.getMap();
    this.goal = scenario.getGoal();
  }

  validatePosition(position) {
    return true; // placeholder (pode verificar obstáculos depois)
  }

  reachedGoal(position) {
    return position.x === this.goal.x && position.y === this.goal.y;
  }
}

module.exports = Simulator;
