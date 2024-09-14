import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class getDutchPaginatorIntl extends MatPaginatorIntl {
    constructor() {
        super();

          this.itemsPerPageLabel = 'Elementos por página';
          this.nextPageLabel = 'Proxima pagina';
          this.previousPageLabel = 'Pagina anterior';
          this.firstPageLabel = 'Primera página';
          this.lastPageLabel = 'Última pagina';
      }
}