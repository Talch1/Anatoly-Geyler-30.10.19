import { Component, OnInit, Input } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';
import { DataService } from '../services/data.service';
import { FiveDaysInstance } from '../models/5Days/FiveDayInstance';
import { CurrentWeather } from '../models/CurrentWeather/CurrentWeather';
import { DailyForecast } from '../models/5Days/DailyForecast';
import { from } from 'rxjs';
import { Location1 } from '../models/location/Location1';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WeatherServiceService, DataService]
})
export class HomeComponent implements OnInit {

  fromChild: any[];

  todayWheather: string = '+3';
  weatherIcon: number = 1;

  favoritCity: string[] = ['Tel aviv'];


  lang: string = 'en-us'
  key: string = 'JO9lp56KXsfXMSTf1GZRhg0Vg7kZGHzQ';
  city: string = 'Tel aviv'

  locatoin: Location1;
  fiveDays: FiveDaysInstance[]=[];
  daily: DailyForecast[]=[];
  currentWeather: CurrentWeather= new CurrentWeather();
  locationKey = "215854";
  receveData() {
    this.city = this.fromChild[0];
    this.todayWheather = this.fromChild[1];
    this.weatherIcon = this.fromChild[2];
    this.daily = this.fromChild[3];
  };

  constructor(private weather: WeatherServiceService, private serv: DataService) {
    this.serv.onClick.subscribe(cnt => this.favoritCity = cnt);
  }

  ngOnInit() {

  }
  receiveFromChild(evnt) {
    this.fromChild = evnt;
    this.receveData();
  }

  AddToServ(s: string[]) {
    this.serv.setData(this.favoritCity);

 }
  AddFavorite() {
    this.favoritCity.push(this.city);

  }
}



