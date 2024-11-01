import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetpageComponent } from './targetpage.component';

describe('TargetpageComponent', () => {
  let component: TargetpageComponent;
  let fixture: ComponentFixture<TargetpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TargetpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
