import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionAlertComponent } from './construction-alert.component';

describe('ConstructionAlertComponent', () => {
  let component: ConstructionAlertComponent;
  let fixture: ComponentFixture<ConstructionAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructionAlertComponent]
    });
    fixture = TestBed.createComponent(ConstructionAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
