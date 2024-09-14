export const TypeColors = {
    bug: "#1d8b8b",
    dragon: "#c79803",
    electric: "#fbc700",
    fairy: "#FF0069",
    fighting: "#df005c",
    fire: "#f0932b",
    flying: "#24bfbf",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
    steel: "#424242"
  };
export interface Type {
    name: string
}
export interface Sprites {
    back_default: string,
    back_shiny: string,
    front_default: string,
    front_shiny: string,
    showdown_front:string,
    showdown_back:string,
    dream_world_front:string
    
}
export interface Abilitie {
    name: string
}
export interface ListPokemon {
    name: string,
    url: string,
    id: number,
    icon: string,
    favorite: boolean
}
export interface Pokemon extends ListPokemon {
    types: Type[];
    base_experience: number;
    height: number,
    weight: number,
    sprites: Sprites;
    abilities: Abilitie[]
}
