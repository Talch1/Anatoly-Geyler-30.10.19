import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';

import { from } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers:[DataService,WeatherServiceService]
})
export class FavoritesComponent implements OnInit {

  
    
FavoritCity:string[] = [];      
  constructor(private wheather:WeatherServiceService,private serv:DataService) {
    this.serv.onClick.subscribe(cnt=>this.FavoritCity = cnt);
  }

   
  lang:string = 'en-us'
  key:string = 'JO9lp56KXsfXMSTf1GZRhg0Vg7kZGHzQ';
  city:string = 'Tel aviv'

  
  


  ngOnInit() {
   
    console.log(this.FavoritCity)
  }

}


 
 