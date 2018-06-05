import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {
apikey = '0af8d43f8fc5903c';
url;
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q';
  }

  getweather(city, state)
  {
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
  }


}
