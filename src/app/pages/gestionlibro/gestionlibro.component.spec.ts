import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionlibroComponent } from './gestionlibro.component';

describe('GestionlibroComponent', () => {
  let component: GestionlibroComponent;
  let fixture: ComponentFixture<GestionlibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionlibroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
