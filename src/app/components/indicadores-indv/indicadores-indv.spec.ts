import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresIndv } from './indicadores-indv';

describe('IndicadoresIndv', () => {
  let component: IndicadoresIndv;
  let fixture: ComponentFixture<IndicadoresIndv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadoresIndv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadoresIndv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
