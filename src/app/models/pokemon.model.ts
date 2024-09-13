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
