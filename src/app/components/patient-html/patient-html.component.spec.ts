import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHtmlComponent } from './patient-html.component';

describe('PatientHtmlComponent', () => {
  let component: PatientHtmlComponent;
  let fixture: ComponentFixture<PatientHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
