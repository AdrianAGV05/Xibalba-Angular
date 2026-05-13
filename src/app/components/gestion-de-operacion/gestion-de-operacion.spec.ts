import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeOperacion } from './gestion-de-operacion';

describe('GestionDeOperacion', () => {
  let component: GestionDeOperacion;
  let fixture: ComponentFixture<GestionDeOperacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDeOperacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDeOperacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
