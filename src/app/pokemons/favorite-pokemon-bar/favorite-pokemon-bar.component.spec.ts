import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePokemonBarComponent } from './favorite-pokemon-bar.component';

describe('FavoritePokemonBarComponent', () => {
  let component: FavoritePokemonBarComponent;
  let fixture: ComponentFixture<FavoritePokemonBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritePokemonBarComponent]
    });
    fixture = TestBed.createComponent(FavoritePokemonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
