import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLeftComponent } from './img-left.component';

describe('ImgLeftComponent', () => {
  let component: ImgLeftComponent;
  let fixture: ComponentFixture<ImgLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
