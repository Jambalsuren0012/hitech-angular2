import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvideoPageComponent } from './allvideo-page.component';

describe('AllvideoPageComponent', () => {
  let component: AllvideoPageComponent;
  let fixture: ComponentFixture<AllvideoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllvideoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllvideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
