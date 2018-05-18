import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokemonList } from './pokemon-list';
import {PokemonEntry} from './pokemon-entry';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _baseUrl: string = 'https://pokeapi.co/api/v2'
  private _spriteBaseUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork';

  constructor( private http: HttpClient ) { }

  findAll(offset: number = 0, limit: number = 20): Observable<PokemonList> {
    return this.http.get<PokemonList>(`${this._baseUrl}/pokemon/?offset=${offset}&limit=${limit}`, httpOptions);
  }
}
