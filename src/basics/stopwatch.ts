export class Stopwatch {
  private hasStarted = false;

  start(): void {
    if (this.hasStarted) {
      console.log("Stopwatch already started");
    } else {
      this.hasStarted = true;
      console.log("Stopwatch started");
    }
  }

  stop(): void {
    if (!this.hasStarted) {
      console.log("Stopwatch already stopped");
    } else {
      this.hasStarted = false;
      console.log("Stopwatch stopped");
    }
  }
}
