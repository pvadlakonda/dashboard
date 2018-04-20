import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenttripsComponent } from './recenttrips.component';

describe('RecenttripsComponent', () => {
  let component: RecenttripsComponent;
  let fixture: ComponentFixture<RecenttripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecenttripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecenttripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
