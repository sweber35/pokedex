import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Observable } from "rxjs/index";
import { PokeApiResponse } from "../poke-api-response";

@Component({
  selector: 'app-list',
  providers: [ PokemonService ],
  templateUrl: './pokedex-list.component.html',
  styleUrls: [ './pokedex-list.component.css' ]
})
export class PokedexListComponent implements OnInit {

  pokeApiResponse$: Observable<PokeApiResponse>;
  offset = 0;
  constructor( private pokemonService: PokemonService ) {}

  list(): void {
    this.pokeApiResponse$ = this.pokemonService.findAll(this.offset, 10);
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
