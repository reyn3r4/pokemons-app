import { Component, Inject } from '@angular/core';
import { Pokemon, TypeColors } from 'src/app/models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons-service.service';
import {  MatDialog } from '@angular/material/dialog';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-favorite-pokemon-bar',
  templateUrl: './favorite-pokemon-bar.component.html',
  styleUrls: ['./favorite-pokemon-bar.component.css']
})
export class FavoritePokemonBarComponent {
  favorite: Pokemon;
  slideIndex: number;
  typeColor: { [key: string]: string };
  barcolor: string;
  constructor(private pokemonService: PokemonsService, public dialog: MatDialog) {
    this.favorite = {
      id: 0,
      url: '',
      name: '',
      icon: '',
      favorite: true,
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
    this.slideIndex = 0;
    this.typeColor = TypeColors;
    this.barcolor = 'red';
  }

  ngOnInit(): void {
    this.pokemonService.favorite.subscribe((pFavorite) => {
      this.favorite = pFavorite;
      this.barcolor = this.favorite && this.favorite.types && this.favorite.types[0] && this.favorite.types[0].name ? this.typeColor[this.favorite.types[0].name] : '#b12424';
    });
  }

  ngAfterViewInit() {
    let that = this;
    showSlides();
    function showSlides() {
      let slides = document.getElementsByClassName("favorite-slides") as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
      if (that.slideIndex >= slides.length) that.slideIndex = 0;
      slides[that.slideIndex].style.display = "block";
      that.slideIndex++;
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
  }
  openDialog() {
    if (this.favorite.id) {
      const dialogRef = this.dialog.open(CardDialogComponent, {
        data: this.favorite,
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
}





