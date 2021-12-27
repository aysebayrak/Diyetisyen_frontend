import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseUpdateComponent } from './disease-update.component';

describe('DiseaseUpdateComponent', () => {
  let component: DiseaseUpdateComponent;
  let fixture: ComponentFixture<DiseaseUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
