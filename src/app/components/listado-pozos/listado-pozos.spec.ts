import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPozos } from './listado-pozos';

describe('ListadoPozos', () => {
  let component: ListadoPozos;
  let fixture: ComponentFixture<ListadoPozos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPozos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPozos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
