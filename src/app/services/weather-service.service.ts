import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Location1 } from '../models/location/Location1';
import { CurrentWeather } from '../models/CurrentWeather/CurrentWeather';
import { FiveDaysInstance } from '../models/5Days/FiveDayInstance';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  baseUrl1: string = 'http://dataservice.accuweather.com/locations/v1'
  baseUrl2: string = 'http://dataservice.accuweather.com/currentconditions/v1'
  baseUrl3: string = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'

  constructor(private http: HttpClient) { }

  private messageSource = new BehaviorSubject<string[]>([])
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string[]) {
    this.messageSource.next(message);
  }


  public getLocation(lang: string, key: string, city: string): Observable<Location1[]> {
    return this.http.get<Location1[]>(this.baseUrl1 + "/cities/autocomplete?q=" + city + "&language=" + lang + "&apikey=" + key);
  }

  public getCurrentWeather(lang: string, apiKey: string, locKey: string): Observable<CurrentWeather[]> {
    return this.http.get<CurrentWeather[]>(this.baseUrl2 + "/" + locKey + "?apikey=" + apiKey + "&language=" + lang + "&details=false");
  }

  public getFiveDayWeather(lang: string, key: string, loc: Location1): Observable<FiveDaysInstance> {
    return this.http.get<FiveDaysInstance>(this.baseUrl3 + "/" + loc.Key + "?apikey=" + key + "&language=" + lang + "&details=false&metric=true");
  }

}
