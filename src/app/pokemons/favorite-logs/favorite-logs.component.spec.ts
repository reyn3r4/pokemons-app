import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteLogsComponent } from './favorite-logs.component';

describe('FavoriteLogsComponent', () => {
  let component: FavoriteLogsComponent;
  let fixture: ComponentFixture<FavoriteLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteLogsComponent]
    });
    fixture = TestBed.createComponent(FavoriteLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
