export class Stack {
  private readonly items: unknown[] = [];

  push(item: unknown): void {
    this.items.push(item);
  }

  pop(): unknown {
    if (this.items.length === 0) throw new Error("Stack is empty.");

    return this.items.pop();
  }
}
