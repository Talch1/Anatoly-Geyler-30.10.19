import { Temperature } from './Temperature';
import { Day } from './Day';
import { Night } from './Night';

export class DailyForecast {
    Date?: Date;
    EpochDate?: number;
    Temperature?: Temperature;
    Day?: Day;
    Night?: Night;
    Sources?: string[];
    MobileLink?: string;
    Link?: string;
}