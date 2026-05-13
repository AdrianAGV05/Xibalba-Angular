import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNuevaAlerta } from './agregar-nueva-alerta';

describe('AgregarNuevaAlerta', () => {
  let component: AgregarNuevaAlerta;
  let fixture: ComponentFixture<AgregarNuevaAlerta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarNuevaAlerta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarNuevaAlerta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
