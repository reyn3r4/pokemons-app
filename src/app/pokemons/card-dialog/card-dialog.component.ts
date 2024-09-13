import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { CardInfoComponent } from '../card-info/card-info.component';
import { Pokemon } from 'src/app/models/pokemon.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-card-dialog',
  standalone: true,
  imports: [CommonModule,MaterialModule,CardInfoComponent],
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pokemon,
  ) {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}


