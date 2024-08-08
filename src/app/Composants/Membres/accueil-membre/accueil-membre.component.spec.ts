import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilMembreComponent } from './accueil-membre.component';

describe('AccueilMembreComponent', () => {
  let component: AccueilMembreComponent;
  let fixture: ComponentFixture<AccueilMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilMembreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
