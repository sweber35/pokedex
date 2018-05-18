import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';
// import {PokemonEntry} from '../pokemon-entry';
import { PokemonList } from '../pokemon-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  providers: [ PokemonService ],
  templateUrl: './pokedex-list.component.html',
  styleUrls: [ './pokedex-list.component.css' ]
})
export class PokedexListComponent implements OnInit {

  pokemon$: Observable<PokemonList>;

  constructor( private pokemonService: PokemonService ) {}

  list(): void {
    this.pokemon$ = this.pokemonService.findAll(1, 10);
  }


  ngOnInit() {

  }

}
