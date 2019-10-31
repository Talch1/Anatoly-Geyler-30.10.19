import { Temperature } from './Temperature';
import { Metric } from './Metric';
import { Imperial } from './Imperial';

export class CurrentWeather {

    Metric?: Metric;
    Temperature?: Temperature;
    Imperial?:Imperial;
    LocalObservationDateTime?: Date;
    EpochTime?: number;
    WeatherText?: string;
    WeatherIcon?: number;
    HasPrecipitation?: boolean;
    PrecipitationType?: any;
    IsDayTime?: boolean;
    MobileLink?: string;
    Link?: string;


}

