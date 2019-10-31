import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';
import { DataService } from '../services/data.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[WeatherServiceService,DataService]
})
export class HomeComponent implements OnInit {

  fromChild:any[];
  city:string ='Tel aviv' ;
  todayWheather :string ='+3';
  weatherIcon:number =1 ;

  favoritCity:string[]=['Tel aviv'];
 
  receveData(){
   this.city= this.fromChild[0];
   this.todayWheather = this.fromChild[1];
   this.weatherIcon = this.fromChild[2];
  };

  constructor(private weatherService:WeatherServiceService,private serv:DataService) {

  }

  ngOnInit() {

  }
  receiveFromChild(evnt){
 this.fromChild= evnt;
 this.receveData();
 }
 
 AddFavorite(){
   this.favoritCity.push(this.city);
   this.serv.AddtoFav(this.city);
 
 }

    }
