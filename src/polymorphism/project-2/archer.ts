import type { Attackable } from "./attackable.js";
import type { Moveable } from "./moveable.js";

export class Archer implements Attackable, Moveable {
  attack(): void {
    console.log("Archer shoots an arrow");
  }

  move(): void {
    console.log("Archer runs away from the enemy");
  }
}
