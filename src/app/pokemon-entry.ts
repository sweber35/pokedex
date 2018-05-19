export class PokemonEntry {
  url: string;
  name: string;
  id: number;
  sprite: string;

  constructor(url: string, name: string) {
    this.url = url;
    this.name = name;
    this.id = +url.split('/')[6];
    this.sprite = `https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }
}
