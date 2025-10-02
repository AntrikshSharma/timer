import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockTime } from './clock-time';

describe('ClockTime', () => {
  let component: ClockTime;
  let fixture: ComponentFixture<ClockTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClockTime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockTime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
