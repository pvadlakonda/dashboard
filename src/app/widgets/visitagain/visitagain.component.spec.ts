import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitagainComponent } from './visitagain.component';

describe('VisitagainComponent', () => {
  let component: VisitagainComponent;
  let fixture: ComponentFixture<VisitagainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitagainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitagainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
