import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
    this.getImgList();
    this.getTipsList();

  }

    getImgList() {
      return this.http.get('https://hago.herokuapp.com/cats/')
                      .pipe(map((res: any) => {
                        return res;
                      })
                    );
    }

    getTipsList() {
      return this.http.get('https://hago.herokuapp.com/cats/tip/random')
        .pipe(map((res: any) => {
          return res;
        }));
    }

}
