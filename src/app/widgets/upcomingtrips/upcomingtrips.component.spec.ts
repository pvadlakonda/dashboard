import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingtripsComponent } from './upcomingtrips.component';

describe('UpcomingtripsComponent', () => {
  let component: UpcomingtripsComponent;
  let fixture: ComponentFixture<UpcomingtripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingtripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingtripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
