import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';

import { from } from 'rxjs';
import { Location1 } from '../models/location/Location1';
import { CurrentWeather } from '../models/CurrentWeather/CurrentWeather';
import { Temperature } from '../models/CurrentWeather/Temperature';
import { FiveDaysInstance } from '../models/5Days/FiveDayInstance';
import { DailyForecast } from '../models/5Days/DailyForecast';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  fiveDays: FiveDaysInstance = new FiveDaysInstance();
  daily: DailyForecast[] = [];
  location1: Location1 = new Location1();
  locationArr: Location1[] = [];
  currentWeather: CurrentWeather = new CurrentWeather();
  currentWeatherArr: CurrentWeather[] = []
  temperature: Temperature = new Temperature();
  cityNumber: string = ''
  lang: string = 'en-us'
  key: string = 'JO9lp56KXsfXMSTf1GZRhg0Vg7kZGHzQ';
  city: string = 'Tel aviv'
  todayTemperature: number = 35;
  weatherIcon: number = 2;
  locKey: string = '';

  ngOnInit() {
    this.getLocation();
  }

  @Output() public outToParent = new EventEmitter<any[]>();
  constructor(private weather: WeatherServiceService) { }

  sendToParent() {
    this.outToParent.emit([this.city, this.todayTemperature, this.weatherIcon, this.daily]);
  }

  public getLocation() {
    this.weather.getLocation(this.lang, this.key, this.city).subscribe(
      response => {
        this.locationArr = response;
        this.location1 = this.locationArr[0];
        this.locKey = this.location1.Key;
        this.getCurrentlyWeather();
      }, err => {
        alert("Error " + err.massage)
      }
    )
  }

  public getCurrentlyWeather() {
    this.weather.getCurrentWeather(this.lang, this.key, this.locKey).subscribe(
      response => {
        this.currentWeatherArr = response;
        this.getFiveDayWeather();
        this.currentWeather = this.currentWeatherArr[0];
        this.todayTemperature = this.currentWeather.Temperature.Metric.Value;
        this.weatherIcon = this.currentWeather.WeatherIcon;
      }, err => {
        alert("Error " + err.massage)
      }
    )
  }
  getFiveDayWeather() {
    this.weather.getFiveDayWeather(this.lang, this.key, this.location1).subscribe(
      response => {
        this.fiveDays = response;
        this.daily = this.fiveDays.DailyForecasts;
        this.sendToParent();
      }, err => {
        alert("Error " + err.massage)
      }
    )
  }
}
