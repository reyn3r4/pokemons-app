import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Log, Pokemon } from 'src/app/models/pokemon.model';
import { getLogAction } from 'src/app/store/selectors';

@Component({
  selector: 'app-favorite-logs',
  templateUrl: './favorite-logs.component.html',
  styleUrls: ['./favorite-logs.component.css']
})
export class FavoriteLogsComponent {
  actionsLogs:Log[];
  constructor(private store:Store){
    this.actionsLogs= [];
  }

  ngOnInit(): void {    
    this.store.select(getLogAction).subscribe((logs)=>{
      this.actionsLogs=logs;
      console.log(this.actionsLogs);
    });
  }
}
