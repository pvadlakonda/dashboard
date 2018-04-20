import { TestBed, inject } from '@angular/core/testing';

import { UpcomingtripsService } from './upcomingtrips.service';

describe('UpcomingtripsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingtripsService]
    });
  });

  it('should be created', inject([UpcomingtripsService], (service: UpcomingtripsService) => {
    expect(service).toBeTruthy();
  }));
});
