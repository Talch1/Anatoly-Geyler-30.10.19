import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fromChild:any[];
  city:string ='Tel aviv' ;
  todayWheather :string ='+3';
  weatherIcon:number ;

  receveData(){
   this.city= this.fromChild[0];
   this.todayWheather = this.fromChild[1];
   this.weatherIcon = this.fromChild[2];
  };

  constructor(private weatherService:WeatherServiceService) { }

  ngOnInit() {

  }
  receiveFromChild(evnt){
 this.fromChild= evnt;
 this.receveData();
 }
 

    }
