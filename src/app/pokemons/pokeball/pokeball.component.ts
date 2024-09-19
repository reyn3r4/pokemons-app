import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokeball',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokeball.component.html',
  styleUrls: ['./pokeball.component.css']
})
export class PokeballComponent {
  @Input() color: string;
  @Input() name: string;
  constructor(){
    this.color='#ff0000';
    this.name='0';
  }
}
