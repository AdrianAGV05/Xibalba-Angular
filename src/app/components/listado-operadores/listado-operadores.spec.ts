import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoOperadores } from './listado-operadores';

describe('ListadoOperadores', () => {
  let component: ListadoOperadores;
  let fixture: ComponentFixture<ListadoOperadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoOperadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoOperadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
