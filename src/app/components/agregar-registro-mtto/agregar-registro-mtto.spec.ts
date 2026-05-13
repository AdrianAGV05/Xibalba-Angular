import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRegistroMtto } from './agregar-registro-mtto';

describe('AgregarRegistroMtto', () => {
  let component: AgregarRegistroMtto;
  let fixture: ComponentFixture<AgregarRegistroMtto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarRegistroMtto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarRegistroMtto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
