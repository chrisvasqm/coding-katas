import {Pokemon} from './pokemon.js';

export class FirePokemon extends Pokemon {
  override attack(): void {
    console.log(`${this.name}, use fireball!`);
  }
}
