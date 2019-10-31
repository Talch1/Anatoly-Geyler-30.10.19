import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';

import { from } from 'rxjs';
import { Location1 } from '../models/location/Location1';
import { CurrentWeather } from '../models/CurrentWeather/CurrentWeather';
import { Temperature } from '../models/CurrentWeather/Temperature';
import { FiveDaysInstance } from '../models/5Days/FiveDayInstance';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  

  constructor(private wheather:WeatherServiceService) { }

  @Output() public outToParent = new EventEmitter<any[]>();

  sendToParent() {
    this.outToParent.emit([this.city,String(this.todayTemperature),this.weatherIcon]);
    }
    
  ngOnInit() {
  }
  fiveDays:FiveDaysInstance[];
  date:Date
  location1: Location1;
  locationArr:Location1[];
  currentWeather:CurrentWeather;
  currentWeatherArr:CurrentWeather[];
  temperature:Temperature;
  cityNumber:string = ''
  lang:string = 'en-us'
  key:string = 'JO9lp56KXsfXMSTf1GZRhg0Vg7kZGHzQ';
  city:string = 'Tel aviv'
  todayTemperature:number =35;
  weatherIcon:number = 2;
  ;
  
  
   public getLocation(){

    this.wheather.getLocation(this.lang,this.key,this.city).subscribe(
     response => {
       this.locationArr = response;
      this.location1 = this.locationArr[0];
      this.cityNumber = this.location1.Key;
      console.log(this.cityNumber);
 
      this.getCurrentlyWeather();
      }, err => {
       alert("Error " + err.massage)
     }
    ) 
    }


    public getCurrentlyWeather(){
this.wheather.getCurrentWeather(this.lang,this.key,this.location1).subscribe(
  response => {
    this.currentWeatherArr = response;
    console.log(this.currentWeatherArr);
    this.currentWeather = this.currentWeatherArr[0];
    this.todayTemperature = this.currentWeather.Temperature.Metric.Value;
    console.log(this.todayTemperature);
    this.weatherIcon =this.currentWeather.WeatherIcon;
    console.log(this.weatherIcon);
    this.sendToParent();
   }, err => {
    alert("Error " + err.massage)
  } 
  

  )
     } 
  
     public getFiveDayWeather(){
      this.wheather.getFiveDayWeather(this.lang,this.key,this.location1).subscribe(
        response => {
          this.fiveDays = response;
          console.log(this.fiveDays);
         // this.currentWeather = this.currentWeatherArr[0];
          this.date = this.fiveDays[0].DayliForecast.Date;
          console.log(this.date);
          this.weatherIcon =this.currentWeather.WeatherIcon;
          console.log(this.weatherIcon);
          this.sendToParent();
         }, err => {
          alert("Error " + err.massage)
        } 
        
      
        )
           } 
        
}
