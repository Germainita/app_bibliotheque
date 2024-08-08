import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreEmpruntesComponent } from './livre-empruntes.component';

describe('LivreEmpruntesComponent', () => {
  let component: LivreEmpruntesComponent;
  let fixture: ComponentFixture<LivreEmpruntesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivreEmpruntesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivreEmpruntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
