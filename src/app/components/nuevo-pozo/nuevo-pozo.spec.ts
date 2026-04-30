import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPozo } from './nuevo-pozo';

describe('NuevoPozo', () => {
  let component: NuevoPozo;
  let fixture: ComponentFixture<NuevoPozo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoPozo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPozo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
