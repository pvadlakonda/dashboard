import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpcomingtripsComponent } from './widgets/upcomingtrips/upcomingtrips.component';
import { RecenttripsComponent } from './widgets/recenttrips/recenttrips.component';
import { GetawaysComponent } from './widgets/getaways/getaways.component';
import { VisitagainComponent } from './widgets/visitagain/visitagain.component';

import { UpcomingtripsService } from './services/upcomingtrips.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpcomingtripsComponent,
    RecenttripsComponent,
    GetawaysComponent,
    VisitagainComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule, MatGridListModule
  ],
  providers: [UpcomingtripsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
