import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeMtto } from './gestion-de-mtto';

describe('GestionDeMtto', () => {
  let component: GestionDeMtto;
  let fixture: ComponentFixture<GestionDeMtto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDeMtto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDeMtto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
