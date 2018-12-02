import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ImggridService {

  constructor(private http: HttpClient) { }

  getDataGridImages(): Observable<any[]>  {
    let result: any;
    // let result2: any;
    // let result3: any;

    const request2 = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
    // jsonp -> makes the http-call(get method) as one javascript object 
    result = this.http.jsonp(request2, 'jsoncallback').pipe(map((response: any) => response));
    // just for test
    // result2 = this.http.jsonp(request2, 'jsoncallback').pipe(map((response: any) => response));
    // result3 = this.http.jsonp(request2, 'jsoncallback').pipe(map((response: any) => response));

    // need to add to array of arrays
    return forkJoin([result]);
    // return forkJoin([result, result2, result3]);
    //  return result;
  }

}
