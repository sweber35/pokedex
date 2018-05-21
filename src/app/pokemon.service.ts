import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// rxjs imports
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { PokeApiResponse } from './poke-api-response';
import { PokemonEntry } from "./pokemon-entry";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {
  }

  findAll(offset: number = 0, limit: number = 20): Observable<PokeApiResponse> {
    return this.http
      .get<PokeApiResponse>(`${this._baseUrl}/pokemon/?offset=${offset}&limit=${limit}`, httpOptions)
      .pipe(
        map(response => {
          const pokemonList = response.results.map(pokemon => new PokemonEntry(pokemon.url, pokemon.name));

          // this line is the same as `response.result = pokemonList` just better to do it this way as it enforces immutability
          const enhancedList = Object.assign({}, response, { results: pokemonList });
          return enhancedList;
        })
      );

  }
}
