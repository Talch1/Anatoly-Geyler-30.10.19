import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';

import { from } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers:[]
})
export class FavoritesComponent implements OnInit {

  constructor(private wheather:WeatherServiceService,private serv:DataService) {
  
   }
  lang:string = 'en-us'
  key:string = 'JO9lp56KXsfXMSTf1GZRhg0Vg7kZGHzQ';
  city:string = 'Tel aviv'

  
FavoritCity:string[]=[];
  
  
  ngOnInit() {
this.FavoritCity = this.serv.favoritCity;
  }

}
