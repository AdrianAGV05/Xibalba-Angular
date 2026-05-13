import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMtto } from './editar-mtto';

describe('EditarMtto', () => {
  let component: EditarMtto;
  let fixture: ComponentFixture<EditarMtto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMtto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMtto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
