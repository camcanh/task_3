import { HttpModule, Http, BaseRequestOptions, RequestOptions, Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {
  
  
  getAllMedia(){
    return this.http.get('http://media.mw.metropolia.fi/wbma/media');
  }

  constructor(private http: Http) {}

  

}
