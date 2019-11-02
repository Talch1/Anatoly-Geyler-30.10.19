import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';
import { CurrentWeather } from '../models/CurrentWeather/CurrentWeather';
import { Location1 } from '../models/location/Location1';
import { Temperature } from '../models/CurrentWeather/Temperature';
import { Favorite } from '../models/Favorite';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],

})
export class FavoritesComponent implements OnInit {


  favoritCity: string[] = [];
  currentWeathers: CurrentWeather[] = []
  cityNunbrs: string[] = [];
  lang: string = 'en-us'
  key: string = 'JO9lp56KXsfXMSTf1GZRhg0Vg7kZGHzQ';
  locKey: string = ''
  location1: Location1 = new Location1();
  locationArr: Location1[] = [];
  currentWeather: CurrentWeather = new CurrentWeather();
  currentWeatherArr: CurrentWeather[] = [];
  temperature: Temperature = new Temperature();
  favorites: Favorite = new Favorite();
  favoriteArr: Favorite[] = [];

  constructor(private weather: WeatherServiceService) {
  }

  ngOnInit() {
    this.weather.currentMessage.subscribe(favoritCity => this.favoritCity = favoritCity);
    this.getLocation();
  }

  public getLocation() {
    for (let index = 0; index < this.favoritCity.length; index++) {
      this.weather.getLocation(this.lang, this.key, this.favoritCity[index]).subscribe(
        response => {
          this.locationArr = response;
          this.location1 = this.locationArr[0];
          this.locKey = this.location1.Key;
          this.cityNunbrs.push(this.locKey);
          console.log(this.cityNunbrs)
          this.getCurrentlyWeather();
        }, err => {
          alert("Error " + err.massage)
        }
      )
    }
  }

  public getCurrentlyWeather() {
    for (let index = 0; index < this.cityNunbrs.length; index++) {
      this.weather.getCurrentWeather(this.lang, this.key, this.cityNunbrs[index]).subscribe(
        response => {
          this.currentWeatherArr = response;
          this.currentWeather = this.currentWeatherArr[0];
          this.favorites.city = this.favoritCity[index];
          this.favorites.todayWheather = String(this.currentWeather.Temperature.Metric.Value);
          this.favorites.weatherIcon = this.currentWeather.WeatherIcon;
          this.favoriteArr.push(this.favorites);
        }, err => {
          alert("Error " + err.massage)
        }
      )
    }
  }

}
