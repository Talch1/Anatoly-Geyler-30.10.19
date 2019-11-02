import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherServiceService } from '../services/weather-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [WeatherServiceService]
})
export class HeaderComponent implements OnInit {

  constructor(private rout: Router, private weather: WeatherServiceService) { }

  ngOnInit() {
  }

  GoHome() {
    this.rout.navigate(['/home'])
  }
  GoToFavorite() {
    this.rout.navigate(['/favorites'])
  }


}
