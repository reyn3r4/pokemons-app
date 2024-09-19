import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { Pokemon, TypeColors } from 'src/app/models/pokemon.model';
import { PokeballComponent } from '../pokeball/pokeball.component';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css'],
  standalone: true,
  imports: [CommonModule, MaterialModule, PokeballComponent]
})
export class CardInfoComponent {
  @Input() pokemon!: Pokemon;
  @Output() setFavorite = new EventEmitter<number>;
  @ViewChild("slidescontainer") private slidescontainer!: ElementRef<HTMLElement>;
  typeColor: { [key: string]: string };
  backStyle: number;
  constructor(elementRef: ElementRef) {
    this.pokemon = {
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
        showdown_front: '',
        showdown_back: '',
        dream_world_front: ''
      },
      abilities: []
    };
    this.typeColor = TypeColors;
    this.backStyle = 0;
  }  

  pokemonSetFavorite(id: number) {
    this.setFavorite.emit(id);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    let slideIndex = 0;
    let slides = this.slidescontainer.nativeElement.children as HTMLCollectionOf<HTMLElement>;
    //let slides = document.getElementsByClassName("pokemon-img-slides") as HTMLCollectionOf<HTMLElement>;
    function showSlides() {
      for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
      if (slideIndex >= slides.length) slideIndex = 0;
      slides[slideIndex++].style.display = "block";
      setTimeout(showSlides, 2000);
    }
    showSlides();
  }


  getStyle() {
    if(this.pokemon.types.length<=this.backStyle) this.backStyle=0;
    let name = this.pokemon && this.pokemon.types && this.pokemon.types[this.backStyle] && this.pokemon.types[this.backStyle].name ? this.pokemon.types[this.backStyle].name : 'bug';
    return {
      'background': `radial-gradient(circle at 4% 17%, ${this.typeColor[name]} 52%, #ffffff 79%)`
    };
  }
  
  setStyle(index: number) {
    this.backStyle= index;
  }
}
