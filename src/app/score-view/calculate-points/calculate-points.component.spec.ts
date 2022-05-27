import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePointsComponent } from './calculate-points.component';

describe('CalculatePointsComponent', () => {
  let component: CalculatePointsComponent;
  let fixture: ComponentFixture<CalculatePointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatePointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
