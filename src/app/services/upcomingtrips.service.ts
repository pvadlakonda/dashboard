import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UpcomingtripsService {

  url = 'https://restcountries.eu/rest/v2/name/usa';

  constructor(private http: HttpClient) { }

  upcomingTrips = [
    { 'destination': 'Dallas', 'daysToGo': 12 },
    { 'destination': 'Paris', 'daysToGo': 25 },
    { 'destination': 'London', 'daysToGo': 45 }
  ]

  getTrips() {
    this.http.get(this.url).subscribe(results => {
      this.upcomingTrips.push({
        'destination': results[0].capital,
        'daysToGo': 67
      });
    });

    return this.upcomingTrips;
  }
}
