import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtohelpComponent } from './howtohelp.component';

describe('HowtohelpComponent', () => {
  let component: HowtohelpComponent;
  let fixture: ComponentFixture<HowtohelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtohelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtohelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
