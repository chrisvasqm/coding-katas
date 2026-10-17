export abstract class Pokemon {
  protected name: string;
  protected level = 1;

  constructor(name: string) {
    this.name = name;
  }

  levelUp(): void {
    this.level++;
  }

  abstract attack(): void;
}
