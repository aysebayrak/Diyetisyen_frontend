import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseAddComponent } from './disease-add.component';

describe('DiseaseAddComponent', () => {
  let component: DiseaseAddComponent;
  let fixture: ComponentFixture<DiseaseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
