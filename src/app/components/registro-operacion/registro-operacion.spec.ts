import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOperacion } from './registro-operacion';

describe('RegistroOperacion', () => {
  let component: RegistroOperacion;
  let fixture: ComponentFixture<RegistroOperacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroOperacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroOperacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
