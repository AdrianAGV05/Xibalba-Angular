import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvoUsuario } from './nvo-usuario';

describe('NvoUsuario', () => {
  let component: NvoUsuario;
  let fixture: ComponentFixture<NvoUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NvoUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvoUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
