import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  favoritCity:string[];

  AddtoFav(s:string){
    this.favoritCity.push(s)
  }

}
