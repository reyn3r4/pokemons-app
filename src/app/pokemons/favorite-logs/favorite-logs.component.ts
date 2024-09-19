import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from 'src/app/models/pokemon.model';
import { getFavoriteLogs } from 'src/app/store/selectors';

@Component({
  selector: 'app-favorite-logs',
  templateUrl: './favorite-logs.component.html',
  styleUrls: ['./favorite-logs.component.css']
})
export class FavoriteLogsComponent {
  favoriteLogs:Pokemon[];
  constructor(private store:Store){
    this.favoriteLogs= [];
  }

  ngOnInit(): void {    
    this.store.select(getFavoriteLogs).subscribe((pFavLog:Pokemon[])=>{
      this.favoriteLogs=pFavLog;
      console.log(this.favoriteLogs);
    });
  }
}
