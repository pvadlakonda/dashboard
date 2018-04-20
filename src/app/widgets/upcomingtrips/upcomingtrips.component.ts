import { Component, OnInit } from '@angular/core';
import { UpcomingtripsService } from './../../services/upcomingtrips.service';

@Component({
  selector: 'app-upcomingtrips',
  templateUrl: './upcomingtrips.component.html',
  styleUrls: ['./upcomingtrips.component.scss']
})
export class UpcomingtripsComponent implements OnInit {
  upcomingTrips = null;

  constructor(private service: UpcomingtripsService) { }

  ngOnInit() {
    this.upcomingTrips = this.service.getTrips();
  }

}
