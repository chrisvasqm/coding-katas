export class Stack<T> {
  private readonly items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T {
    if (this.items.length === 0) {
      throw new Error('Stack is empty.');
    }

    const lastItemIndex = this.items.length - 1;
    const lastItem = this.items[lastItemIndex];
    this.items.splice(lastItemIndex, 1);

    return lastItem!;
  }
}
