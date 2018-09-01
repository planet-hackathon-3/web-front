import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() {
    let imgList = [],
     tips, like_count;

     fetch('http://192.168.43.181:8000/cats/')
     .then((res) => {
       let img = res.json();



     })

  }

}
