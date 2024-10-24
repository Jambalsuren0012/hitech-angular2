import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscardSliderComponent } from './newscard-slider.component';

describe('NewscardSliderComponent', () => {
  let component: NewscardSliderComponent;
  let fixture: ComponentFixture<NewscardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewscardSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewscardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
