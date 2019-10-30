import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location1 } from '../models/location/Location1';
import { CurrentWeather } from '../models/CurrentWeather/CurrentWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http:HttpClient) { }

  baseUrl = 'http://dataservice.accuweather.com/locations/v1'

  public getLocation(lang:string,key:string,city:string): Observable<Location1[]>{
    return this.http.get<Location1[]>(this.baseUrl +"/cities/autocomplete?q="+ city +"&language="+ lang+"&apikey=" + key );
   }

   
   public getCurrentWeather(lang:string,key:string,loc:Location1): Observable<CurrentWeather>{
     return this.http.get<CurrentWeather>(this.baseUrl+"/" +loc.Key+"?apikey="+key+"&language="+lang+"&details=false");
    }


}
