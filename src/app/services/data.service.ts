import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  favoritCity:string[] = ['Tel Aviv'];

  onClick:EventEmitter<string[]> = new EventEmitter();

  
  public doClick(){

    this.onClick.emit(this.favoritCity);
  }
  


  setData(s:string[]){
    this.favoritCity= s;
    
  }
getData(){
  let temp = this.favoritCity;

  return temp;
}
 




}


  
