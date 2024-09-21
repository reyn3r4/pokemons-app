import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { Pokemon, TypeColors } from 'src/app/models/pokemon.model';
import { PokeballComponent } from '../pokeball/pokeball.component';
import { ImgSliderDirective } from '../../directives/img-slider.directive';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css'],
  standalone: true,
  imports: [CommonModule, MaterialModule, PokeballComponent, ImgSliderDirective]
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
    if (!this.pokemon.favorite) this.setFavorite.emit(id);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.showSlides(this.slidescontainer.nativeElement.children as HTMLCollectionOf<HTMLElement>, 0);
  }

  private showSlides(slides: HTMLCollectionOf<HTMLElement>, slideIndex: number) {
    for (let i = 0; i < slides.length; i++) slides[i].style.display = slideIndex == i ? "block" : "none";
    slideIndex = slideIndex < slides.length-1 ? slideIndex + 1 : 0;
    setTimeout(() => this.showSlides(slides, slideIndex), 2000);
  }


  getStyle() {
    if (this.pokemon.types.length <= this.backStyle) this.backStyle = 0;
    let name = this.pokemon && this.pokemon.types && this.pokemon.types[this.backStyle] && this.pokemon.types[this.backStyle].name ? this.pokemon.types[this.backStyle].name : 'bug';
    return {
      'background': `radial-gradient(circle at 4% 17%, ${this.typeColor[name]} 52%, #ffffff 79%)`
    };
  }

  getDirs(): string[] {
    let imgs = [];
    if (this.pokemon.sprites.front_default && this.pokemon.sprites.front_default != '')
      imgs.push(this.pokemon.sprites.front_default);
    if (this.pokemon.sprites.back_default && this.pokemon.sprites.back_default != '')
      imgs.push(this.pokemon.sprites.back_default);
    if (this.pokemon.sprites.back_shiny && this.pokemon.sprites.back_shiny != '')
      imgs.push(this.pokemon.sprites.back_shiny);
    if (this.pokemon.sprites.front_shiny && this.pokemon.sprites.front_shiny != '')
      imgs.push(this.pokemon.sprites.front_shiny);
    return imgs;
  }

  setStyle(index: number) {
    this.backStyle = index;
  }
}
