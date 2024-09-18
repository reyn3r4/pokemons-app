import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, inject } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { ListPokemon } from 'src/app/models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons-service.service';

@Component({
  selector: 'app-pokemon-resume',
  templateUrl: './pokemon-resume.component.html',
  styleUrls: ['./pokemon-resume.component.css']
})
export class PokemonResumeComponent {
  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns: string[];
  listToResume$: Observable<ListPokemon[]>;
//  listPokemons:ListPokemon[];
  sort: Sort;
  constructor(private pokemonService: PokemonsService) {
    this.listToResume$ = this.pokemonService.allLoaded;
    this.displayedColumns = ['initial', 'count'];
    this.sort = {
      active: 'initial',
      direction: 'asc',
    };
  //  this.listPokemons=[];
  }

 /* ngOnInit(): void {
    this.listToResume$.subscribe(list=>{
      this.listPokemons=list;
    });
  }
  ngAfterViewInit() {
  }*/
  announceSortChange(sortState: Sort) {
    this.sort = sortState;
  }

}
