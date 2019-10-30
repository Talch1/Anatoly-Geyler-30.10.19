import { Temperature } from './Temperature';
import { Imperial } from './Imperial';
import { Metric } from '../metric';

export class CurrentWeather {

    LocalObservationDateTime: Date;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType: any;
    IsDayTime: boolean;
    Temperature: Temperature;
    MobileLink: string;
    Link: string;
    metric:Metric;
    imperial:Imperial;

   

   


    

}

