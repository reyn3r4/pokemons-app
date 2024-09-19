import { Pipe, PipeTransform } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Pipe({
  name: 'genPokemonsResume',
  pure:true
})
export class GenPokemonsResumePipe implements PipeTransform {
  transform(pokemons: any[], sort: Sort): any[] {
    /*let initials = pokemons.map(pok => {
      return { ...pok, initial: pok.name.charAt(0) };
    }).reduce((prev, cur) => {
      if (prev.length) {
        const i = prev.findIndex((element: any) => element.initial === cur.initial);
        if (i != -1) prev[i].count++;
        else prev.push({ initial: cur.initial, count: 1 });
      } else {
        prev.push({ initial: cur.initial, count: 1 });
      }
      return prev;
    }, []);*/
    let initials = pokemons.reduce((prev, cur) => {
        const i = prev.findIndex((element: any) => element.initial === cur.name.charAt(0));
        if (i != -1) 
          prev[i].count++;
        else 
          prev.push({ initial: cur.name.charAt(0), count: 1 });
      return prev;
    }, []);
    if (sort.direction)
      initials = initials.sort(function (a: any, b: any) {
        return (a[sort.active] < b[sort.active] ? -1 : 1) * (sort.direction == 'asc' ? 1 : -1);
      });
    return initials;
  }
}
