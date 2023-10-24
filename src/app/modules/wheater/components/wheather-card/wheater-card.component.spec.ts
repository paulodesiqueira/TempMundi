import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheaterCardComponent } from './wheater-card.component';

describe('WheaterCardComponent', () => {
  let component: WheaterCardComponent;
  let fixture: ComponentFixture<WheaterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WheaterCardComponent]
    });
    fixture = TestBed.createComponent(WheaterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
