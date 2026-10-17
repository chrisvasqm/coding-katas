export class Stopwatch {
  private isRunning = false;

  start(): void {
    if (this.isRunning) {
      console.log('Already Started');
    } else {
      this.isRunning = true;
      console.log('Started');
    }
  }

  stop(): void {
    if (this.isRunning) {
      this.isRunning = false;
      console.log('Stopped');
    } else {
      console.log('Already Stopped');
    }
  }
}
