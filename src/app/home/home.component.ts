import { Component, OnInit, Input } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';
import { FiveDaysInstance } from '../models/5Days/FiveDayInstance';
import { CurrentWeather } from '../models/CurrentWeather/CurrentWeather';
import { DailyForecast } from '../models/5Days/DailyForecast';
import { from } from 'rxjs';
import { Location1 } from '../models/location/Location1';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  fromChild: any[];
  todayWheather: number = -15.3;
  weatherIcon: number;
  favoritCity: string[] = []
  message: string;
  lang: string = 'en-us'
  key: string = 'JO9lp56KXsfXMSTf1GZRhg0Vg7kZGHzQ';
  city: string = 'Tel aviv'
  locatoin: Location1;
  fiveDays: FiveDaysInstance[] = [];
  daily: DailyForecast[] = [];


  constructor(private weather: WeatherServiceService) {
  }

  ngOnInit() {

    this.weather.currentMessage.subscribe(favoritCity => this.favoritCity = favoritCity);
  }

  receveData() {
    this.city = this.fromChild[0];
    this.todayWheather = this.fromChild[1];
    this.weatherIcon = this.fromChild[2];
    this.daily = this.fromChild[3];
  }

  receiveFromChild(evnt) {
    this.fromChild = evnt;
    this.receveData();
  }

  AddFavorite() {
    this.favoritCity.push(this.city);
    this.weather.changeMessage(this.favoritCity);
  }
}



