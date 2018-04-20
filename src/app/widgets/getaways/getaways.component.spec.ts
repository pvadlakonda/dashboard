import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetawaysComponent } from './getaways.component';

describe('GetawaysComponent', () => {
  let component: GetawaysComponent;
  let fixture: ComponentFixture<GetawaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetawaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetawaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
