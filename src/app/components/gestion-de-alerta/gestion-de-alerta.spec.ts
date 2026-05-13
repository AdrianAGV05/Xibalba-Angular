import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeAlerta } from './gestion-de-alerta';

describe('GestionDeAlerta', () => {
  let component: GestionDeAlerta;
  let fixture: ComponentFixture<GestionDeAlerta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDeAlerta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDeAlerta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
