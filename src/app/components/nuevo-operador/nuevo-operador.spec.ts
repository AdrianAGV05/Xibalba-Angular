import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoOperador } from './nuevo-operador';

describe('NuevoOperador', () => {
  let component: NuevoOperador;
  let fixture: ComponentFixture<NuevoOperador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoOperador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoOperador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
