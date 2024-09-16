import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ListPokemon, Pokemon } from 'src/app/models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons-service.service';
import { debounceTime, map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getFavorite } from 'src/app/store/selectors';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent {
  selected: number;
  favorite: number;
  displayedColumns: string[];
  pokemonsList: ListPokemon[] = [];
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  dataSource!: MatTableDataSource<ListPokemon>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() setSelected = new EventEmitter<number>;
  @Output() setFavorite = new EventEmitter<number>;
  constructor(private pokemonService: PokemonsService, private store:Store) {
    this.displayedColumns = ['id', 'icon', 'favorite', 'name'];
    this.pokemonsList = [];
    this.selected = 0;
    this.favorite = 0;
    this.dataSource = new MatTableDataSource<ListPokemon>(this.pokemonsList);
  }
  ngOnInit(): void {
    this.dataSource=new MatTableDataSource<ListPokemon>(this.pokemonsList);
    this.pokemonService.pokemons.subscribe((pPokemonsList:ListPokemon[]) => {
      this.pokemonsList=pPokemonsList;
      this.dataSource.data = this.pokemonsList;
    });
    this.pokemonService.favorite.subscribe((pFav:Pokemon)=>{
      this.pokemonsList=this.pokemonService.getPokemonsList();
      this.dataSource.data = this.pokemonsList;
    });
    this.store.select(getFavorite).subscribe((pFav:Pokemon)=>{
      this.pokemonsList=this.pokemonService.getPokemonsList();
      this.dataSource.data = this.pokemonsList;
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      map(value => this.formFilter(value|| '')),
    );
  }
  ngOnDestroy(){
    this.pokemonService.selectPokemonAdvice.unsubscribe();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.pokemonService.loadAllPokemons();
  }

  formFilter(val:string):string[]{
    return this.pokemonsList.map(el=>{
      return el.name.toLowerCase();
    }).filter(option => option.toLowerCase().includes(val.toLowerCase()));
  }



  onKeyUp(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.applyFilter(filterValue);
  }

  applyFilter(pfilter: string) {
    this.dataSource.filter = pfilter.toLowerCase();
  }
  pokemonSelected(row: any) {
    if (row.id != this.selected) {
      this.selected = row.id;
      this.setSelected.emit(this.selected);
    }
  }
  pokemonSetFavorite(row: any) {
    this.favorite = row.id;
    this.setFavorite.emit(this.favorite);
  }
}
