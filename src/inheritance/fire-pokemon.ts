import { Pokemon } from "./pokemon.js";

// `final` has no TS keyword; a private constructor is the closest equivalent to block subclassing,
// but it also blocks `new`. Convention: document the class as final.
export class FirePokemon extends Pokemon {
  override attack(): void {
    console.log(`${this.name}, use fireball!`);
  }
}
