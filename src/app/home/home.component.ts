import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';
import { ConnectServiceService } from '../services/connect-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  city:string ="Tel aviv" ;

  constructor(private weatherService:WeatherServiceService) { }

  ngOnInit() {

  }
  receiveFromChild(evnt){
 this.city = evnt;
 }

    }
