import { Component, Inject } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons-service.service';



import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { CardInfoComponent } from '../card-info/card-info.component';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-favorite-pokemon-bar',
  templateUrl: './favorite-pokemon-bar.component.html',
  styleUrls: ['./favorite-pokemon-bar.component.css']
})
export class FavoritePokemonBarComponent {
  favorite: Pokemon;
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
        showdown_front:'',
        showdown_back:'',
        dream_world_front:''
      },
      abilities: []
    };
  }

  ngOnInit(): void {
    this.pokemonService.favorite.subscribe((pFavorite) => {
      this.favorite = pFavorite;
    });
  }

  ngAfterViewInit() {
    let slideIndex = 0;
    showSlides();
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("favorite-slides") as HTMLCollectionOf<HTMLElement>;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
  }

  openDialog(){
    const dialogRef = this.dialog.open(CardDialogComponent, {
      data: this.favorite,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}





