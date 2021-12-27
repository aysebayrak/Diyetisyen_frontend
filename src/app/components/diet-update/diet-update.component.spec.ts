import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietUpdateComponent } from './diet-update.component';

describe('DietUpdateComponent', () => {
  let component: DietUpdateComponent;
  let fixture: ComponentFixture<DietUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
