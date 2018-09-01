import {Component, OnChanges, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {
  public imgJson;
  public imgUrls = [''];

  constructor(private dataService: DataService ) {
    this.dataService.getImgList().subscribe((items) => {
      this.imgUrls = items.map(item => item['url']);
      console.log(this.imgUrls);
    });
   }
  //  this.imgUrls = [
  //   '../../assets/test01.jpg',
  //   '../../assets/test02.jpg',
  //   '../../assets/test03.jpg',
  //   '../../assets/test04.jpg',
  //   '../../assets/test05.jpg',
  //   '../../assets/test06.jpg',
  //   '../../assets/test07.jpg',
  //   '../../assets/test08.jpg'
  // ];

  ngOnInit() {
    //this.imgUrls = JSON.parse(this.imgJson).map(a => a.url);
  }
}
