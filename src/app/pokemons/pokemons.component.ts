import { Component } from '@angular/core';
import { PokemonsService } from '../services/pokemons-service.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  providers:  [ PokemonsService ]
})
export class PokemonsComponent {
  selected:Pokemon;
  favorite:number;
  constructor(private pokemonService: PokemonsService) {
    this.favorite=0;
    this.selected={
      id:0,
      url:'',
      name:'',
      icon:'',
      favorite:false,
      types:[],
      base_experience:0,
      height:0,
      weight:0,
      sprites:{
        back_default:'',
        back_shiny:'',
        front_default:'',
        front_shiny:'',
        showdown_front:'',
        showdown_back:'',
        dream_world_front:''
      },
      abilities:[]
    };    
  }

  ngOnInit(): void {
    this.pokemonService.selectPokemonAdvice.subscribe(loaded => {
      this.selected=loaded;
    });
  }

  pokemonSelected(id:number){
    this.pokemonService.loadPokemon(id);
  }
  changeFavorite(id:number){
    this.favorite=id;
    this.pokemonService.loadFavorite(id);
  }
}


