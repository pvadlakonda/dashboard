import { Injectable } from '@angular/core';

@Injectable()
export class UpcomingtripsService {

  constructor() { }

  upcomingTrips = [
    { 'destination': 'Dallas', 'daysToGo': 12 },
    { 'destination': 'Paris', 'daysToGo': 25 },
    { 'destination': 'London', 'daysToGo': 45 }
  ]

  getTrips() {
    return this.upcomingTrips;
  }
}
