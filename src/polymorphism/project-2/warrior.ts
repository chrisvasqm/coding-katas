import type {Attackable} from './attackable.js';
import type {Moveable} from './moveable.js';

export class Warrior implements Attackable, Moveable {
  attack(): void {
    console.log('Warrior swings his axe');
  }

  move(): void {
    console.log('Warrior walks towards the enemy');
  }
}
