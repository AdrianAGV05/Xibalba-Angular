import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMtto } from './registro-mtto';

describe('RegistroMtto', () => {
  let component: RegistroMtto;
  let fixture: ComponentFixture<RegistroMtto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroMtto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMtto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
