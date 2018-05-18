export class PokemonList {
  url: string;
  name: string;
  id: number;

  constructor(url: string, name: string) {
    this.url = url;
    this.name = name;
    this.id = +url.split('/')[6];
  }
}
