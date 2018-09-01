import { Component, OnInit } from '@angular/core';
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
    this.imgJson = this.dataService.getImgList().subscribe((items) => {
      this.imgUrls = items.map(item => item['url']);
    });

   }

  ngOnInit() {

  }
}
