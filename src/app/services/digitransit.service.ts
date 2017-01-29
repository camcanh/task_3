import { Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DigitransitService {
  getRoutes(name: string){
    const url: string = "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";
    const headers = new Headers({'Content-Type': 'application/graphql'});
    const options = new RequestOptions({ headers: headers});
    let data = `{
      stops(name: "${name}") {
        patterns{
          name
        }
      }
        
      }`;
      return this.http.post(url, data, options).map(resp => resp.json());

  }


  constructor(private http: Http) { }

}
