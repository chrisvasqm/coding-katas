import {Pokemon} from './pokemon.js';

export class WaterPokemon extends Pokemon {
  override attack(): void {
    console.log(`${this.name}, use bubble beam!`);
  }
}
