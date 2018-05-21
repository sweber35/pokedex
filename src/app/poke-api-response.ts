import { PokemonEntry } from './pokemon-entry'

export class PokeApiResponse {

  count: number;
  previous: string;
  next: string;
  results: PokemonEntry[];

  constructor(count: number, previous: string, next: string, results: PokemonEntry[]) {
    this.count = count;
    this.previous = previous;
    this.next = next;
    this.results = results;
  }
}
