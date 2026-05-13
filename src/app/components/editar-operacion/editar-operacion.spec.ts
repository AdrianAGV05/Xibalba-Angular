import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOperacion } from './editar-operacion';

describe('EditarOperacion', () => {
  let component: EditarOperacion;
  let fixture: ComponentFixture<EditarOperacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarOperacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOperacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
