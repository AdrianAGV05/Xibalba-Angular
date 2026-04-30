import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecContrasena } from './rec-contrasena';

describe('RecContrasena', () => {
  let component: RecContrasena;
  let fixture: ComponentFixture<RecContrasena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecContrasena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecContrasena);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
