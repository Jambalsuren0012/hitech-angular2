import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifateComponent } from './certifate.component';

describe('CertifateComponent', () => {
  let component: CertifateComponent;
  let fixture: ComponentFixture<CertifateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertifateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertifateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
