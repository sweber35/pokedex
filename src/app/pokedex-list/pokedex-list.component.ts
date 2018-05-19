import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonEntry } from '../pokemon-entry';

@Component({
  selector: 'app-list',
  providers: [ PokemonService ],
  templateUrl: './pokedex-list.component.html',
  styleUrls: [ './pokedex-list.component.css' ]
})
export class PokedexListComponent implements OnInit {

  pokemon: PokemonEntry[];
  offset = 0;
  constructor( private pokemonService: PokemonService ) {}

  list(): void {
    this.pokemonService.findAll(this.offset, 10)
      .subscribe(response => {
         // console.log(response.results);
        let temp: PokemonEntry[] = [];
        response.results.forEach( entry => {
          temp.push(new PokemonEntry(entry.url, entry.name));
        });
        this.pokemon = temp;
      });
  }

  next(): void {
    this.offset += 10;
    this.list();
  }

  previous(): void {
    this.offset -= 10;
    this.list();
  }


  ngOnInit() {

  }

}
