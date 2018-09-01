import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {
  public imgArr;
  public imgUrls;

  constructor(private dataService: DataService ) {
    this.imgArr = JSON.parse(this.dataService.getImgList().subscribe());
    this.imgUrls = this.imgArr.map(a => a.url);
   }

  ngOnInit() {

  }
}
