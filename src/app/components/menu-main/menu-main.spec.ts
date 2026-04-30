import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMain } from './menu-main';

describe('MenuMain', () => {
  let component: MenuMain;
  let fixture: ComponentFixture<MenuMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
