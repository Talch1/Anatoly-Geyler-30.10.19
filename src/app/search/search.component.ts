import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';

import { from } from 'rxjs';
import { Location1 } from '../models/location/Location1';
import { AdministrativeArea } from '../models/location/AdministrativeArea';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private wheather:WeatherServiceService) { }

  @Output() public outToParent = new EventEmitter();

  sendToParent() {
    this.outToParent.emit(this.city);
    }
    
  ngOnInit() {
  
    
  }
  administrativeArea:AdministrativeArea;
  location1: Location1;
  locationArr:Location1[];
  cityNumber:string = ''
  lang:string = 'en-us'
  key:string = 'JO9lp56KXsfXMSTf1GZRhg0Vg7kZGHzQ';
  city:string = ''
  
  
  public getLocation(){

    this.wheather.getLocation(this.lang,this.key,this.city).subscribe(
      response => {
        this.locationArr = response;
       this.location1 = this.locationArr[0];
       this.cityNumber = this.location1.Key;
       console.log(this.cityNumber);
       this.sendToParent();
       this.getCurrentlyWeather();
      }, err => {
        alert("Error " + err.massage)
      }
    )
    }


    public getCurrentlyWeather(){
this.wheather.getCurrentWeather(this.lang,this.key,this.location1).subscribe(
  response => {
    console.log();
  }, err => {
    alert("Error " + err.massage)
  }
  

)
    }

}
