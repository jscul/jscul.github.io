export default class Engine {
  constructor(update) {
    this.update = update;

    this.timestep = 1000 / 20; // 20 ticks/second

    this.accumulatedTime = 0;
    this.time = 0;
  }

  run() {
    this.time = Date.now();
    setInterval(this.tick.bind(this), this.timestep);
  }

  tick() {
    let timestamp = Date.now();
    const delta = timestamp - this.time;
    this.accumulatedTime += delta;
    this.time = timestamp;

    while (this.accumulatedTime >= this.timestep) {
      this.accumulatedTime -= this.timestep;
      this.update();
    }
  }
}
