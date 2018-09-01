import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
    // tslint:disable-next-line:whitespace
    getImgList(): Observable<Object> {
      return this.http.get('http://192.168.43.181:8000/cats/')
                      .map(res => res.json());
    }

    getTipsList () {
      return this.http.get('http://192.168.43.181:8000/cats/tip/random/')
                      .map(res => res.json());
    }

  }
}
