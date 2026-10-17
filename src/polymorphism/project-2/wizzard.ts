import type { Attackable } from "./attackable.js";
import type { Moveable } from "./moveable.js";

export class Wizzard implements Attackable, Moveable {
  attack(): void {
    console.log("Wizzard casts a blizzard spell");
  }

  move(): void {
    console.log("Wizzard teleports away from the enemy");
  }
}
