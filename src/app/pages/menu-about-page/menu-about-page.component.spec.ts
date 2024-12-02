import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAboutPageComponent } from './menu-about-page.component';

describe('MenuAboutPageComponent', () => {
  let component: MenuAboutPageComponent;
  let fixture: ComponentFixture<MenuAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuAboutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
