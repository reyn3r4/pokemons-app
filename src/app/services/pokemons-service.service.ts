import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { ListPokemon, Pokemon, Sprites, Type } from '../models/pokemon.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ACTIONS, logAction, setFavoritePokemon } from '../store/actions';
import { logFavorite } from '../pokemons/decorators/logFavorite';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private aServiceURL: string;
  private aListPokemons: ListPokemon[] = [];
  private defaultP: Pokemon;
  private loadPokemonsAdvice: BehaviorSubject<ListPokemon[]>;
  private loadAllPokemonsAdvice: BehaviorSubject<ListPokemon[]>;  
  public selectPokemonAdvice: BehaviorSubject<Pokemon>;
  public favoritePokemonAdvice: BehaviorSubject<Pokemon>;
  constructor(private http: HttpClient, private store:Store) {
    this.aServiceURL = environment.pokemonsApiUrl;
    this.defaultP = {
      id: 0,
      url: '',
      name: '',
      icon: '',
      favorite: false,
      types: [],
      base_experience: 0,
      height: 0,
      weight: 0,
      sprites: {
        back_default: '',
        back_shiny: '',
        front_default: '',
        front_shiny: '',
        showdown_front:'',
        showdown_back:'',
        dream_world_front:''
      },
      abilities: []
    };
    this.loadPokemonsAdvice=new BehaviorSubject<ListPokemon[]>([]);
    this.loadAllPokemonsAdvice=new BehaviorSubject<ListPokemon[]>([]);
    this.selectPokemonAdvice = new BehaviorSubject<Pokemon>(this.defaultP);
    this.favoritePokemonAdvice = new BehaviorSubject<Pokemon>(this.defaultP);
  }

  private getIdFromURL(url: string) {
    let arr = url.split('pokemon/');
    let id: number = parseInt(arr[arr.length - 1]);
    return id;
  }
  private getIcon(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id.toString()}.png`;
  }
  private loadPokemonsPaginated(url?: string) {
    var that = this;
    this.http.get(url ? url : this.aServiceURL).subscribe((data) => {
      const response = JSON.parse(JSON.stringify(data));
      response.results.forEach(function (rPok: any) {
        if (rPok.name) {
          let id = that.getIdFromURL(rPok.url);
          that.addPokemon({
            url: rPok.url,
            name: rPok.name,
            id: id,
            icon: that.getIcon(id),
            favorite: false
          });
        }
      });
      this.loadPokemonsAdvice.next(this.aListPokemons);
      if (response.next) this.loadPokemonsPaginated(response.next);
      else this.loadAllPokemonsAdvice.next(this.aListPokemons);
    });
  }
  private addPokemon(pPokemon: ListPokemon) {
    this.aListPokemons.push(pPokemon);
  }
  private addPokemons(pPokemons: ListPokemon[]) {
    return this.aListPokemons.concat(pPokemons);
  }
  private updatePokemonData(pNameOrId: string | number, data: Pokemon) {
    var i = this.aListPokemons.findIndex(p => p.name == pNameOrId || p.id == pNameOrId);
    if (Boolean(i>=0)) this.aListPokemons[i] = data;
  }
  private getPokemonResponseSprites(pPok: any): Sprites {
    return {
      back_default: pPok.sprites.back_default,
      back_shiny: pPok.sprites.back_shiny,
      front_default: pPok.sprites.front_default,
      front_shiny: pPok.sprites.front_shiny,
      showdown_front:pPok.sprites.other && pPok.sprites.other.showdown && pPok.sprites.other.showdown.front_default?pPok.sprites.other.showdown.front_default:pPok.sprites.front_default,
      showdown_back:pPok.sprites.other && pPok.sprites.other.showdown && pPok.sprites.other.showdown.back_default?pPok.sprites.other.showdown.back_default:pPok.sprites.back_default,
      dream_world_front:pPok.sprites.other && pPok.sprites.other.dream_world && pPok.sprites.other.dream_world.front_default?pPok.sprites.other.dream_world.front_default:pPok.sprites.front_default,
    };
  }
  private getPokemonResponseTypes(pPok: any): Type[] {
    let ArrT: Type[] = [];
    pPok.types.forEach(function (rt: any) {
      ArrT.push({
        name: rt.type.name
      });
    });
    return ArrT;
  }
  private getPokemon(pNameOrId: string | number): Pokemon {
    return this.aListPokemons.find(p => p.name == pNameOrId || p.id === pNameOrId) as Pokemon;
  }
  private setFavorite(pId:number){
    this.aListPokemons.forEach(function(pok){      
      pok.favorite=pok.id==pId;
    }); 
  }

  loadAllPokemons(){
    this.loadPokemonsPaginated();
  }
  getPokemonsList(): ListPokemon[]{
    return this.aListPokemons;
  }

  get allLoaded(){
    return this.loadAllPokemonsAdvice.asObservable();
  }
  get pokemons(){
    return this.loadPokemonsAdvice.asObservable();
  }
  get favorite(){
    return this.favoritePokemonAdvice.asObservable();
  }
  loadPokemon(pNameOrId: string | number) {
    let pokemonLoaded = this.getPokemon(pNameOrId);
    if (pokemonLoaded && pokemonLoaded.height) {
      this.selectPokemonAdvice.next(pokemonLoaded);
    } else {
      this.http.get(`${this.aServiceURL}/${pNameOrId}`).subscribe((data) => {
        const resPok = JSON.parse(JSON.stringify(data));
        if (resPok.id) {
          let pokemon: Pokemon = {
            url: `${this.aServiceURL}/${resPok.name}`,
            name: resPok.name,
            id: resPok.id,
            icon: resPok.sprites.front_default,
            favorite: false,
            types: this.getPokemonResponseTypes(resPok),
            base_experience: resPok.base_experience,
            height: resPok.height,
            weight: resPok.weight,
            sprites: this.getPokemonResponseSprites(resPok),
            abilities: resPok.abilities.map(function (at: any) {
              return {
                name: at.ability.name
              };
            })
          };
          this.updatePokemonData(resPok.name, pokemon);
          this.selectPokemonAdvice.next(pokemon);
        }
      });
    }

  }
  /* @logFavorite{

  } */
  loadFavorite(pNameOrId: string | number) {
    let favoriteLoaded = this.getPokemon(pNameOrId);
    if (favoriteLoaded && favoriteLoaded.height) {
      this.setFavorite(favoriteLoaded.id);
      this.favoritePokemonAdvice.next(favoriteLoaded);
      this.store.dispatch(setFavoritePokemon({favorite: { ...favoriteLoaded }}));
    } else {
      this.http.get(`${this.aServiceURL}/${pNameOrId}`).subscribe((data) => {
        const resPok = JSON.parse(JSON.stringify(data));
        if (resPok.id) {
          let pokemon: Pokemon = {
            url: `${this.aServiceURL}/${resPok.name}`,
            name: resPok.name,
            id: resPok.id,
            icon: resPok.sprites.front_default,
            favorite: true,
            types: this.getPokemonResponseTypes(resPok),
            base_experience: resPok.base_experience,
            height: resPok.height,
            weight: resPok.weight,
            sprites: this.getPokemonResponseSprites(resPok),
            abilities: resPok.abilities.map(function (at: any) {
              return {
                name: at.ability.name
              };
            })
          };
          this.updatePokemonData(resPok.name, pokemon);
          this.setFavorite(pokemon.id);
          this.favoritePokemonAdvice.next(pokemon);
          //this.store.dispatch(setFavoritePokemon({favorite: { ...pokemon }}));
          this.store.dispatch({type:ACTIONS.SET_FAVORITE,favorite: { ...pokemon }});
          this.store.dispatch(logAction({log:{ text:'Set favorite', action:ACTIONS.SET_FAVORITE }}));
        }
      });
    }
  }
  loadAbilities(poke:Pokemon)
  {
    return this.http.get(this.aServiceURL.replace('pokemon',`/ability/${poke.abilities[0].name}`)) as Observable<any>;
  }
}
