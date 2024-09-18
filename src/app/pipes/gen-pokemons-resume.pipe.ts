import { Pipe, PipeTransform } from '@angular/core';
import { Sort } from '@angular/material/sort';

@Pipe({
  name: 'genPokemonsResume',
  pure:true
})
export class GenPokemonsResumePipe implements PipeTransform {
  transform(pokemons: any[], sort: Sort): any[] {
    let initials = pokemons.map(pok => {
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
    }, []);
    if (sort.direction)
      initials = initials.sort(function (a: any, b: any) {
        if (sort.active == 'initial')
          if (sort.direction == 'asc')
            return a.initial > b.initial ? 1 : a.initial < b.initial ? -1 : 0;
          else return a.initial < b.initial ? 1 : a.initial > b.initial ? -1 : 0;
        else {
          if (sort.direction == 'asc')
            return a.count > b.count ? 1 : a.count < b.count ? -1 : 0;
          else return a.count < b.count ? 1 : a.count > b.count ? -1 : 0;
        }
      });
    return initials;
  }
}
