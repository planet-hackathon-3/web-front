import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tipbar',
  templateUrl: './tipbar.component.html',
  styleUrls: ['./tipbar.component.css']
})

export class TipbarComponent implements OnInit {

  public imgArr;
  public tipsArr;
  public now = new Date();
  public tipIdx = 0;

  constructor(private dataService: DataService) {
    this.imgArr = JSON.parse(this.dataService.getImgList().subscribe());
    this.tipsArr = JSON.parse(this.dataService.getTipsList().subscribe());
   }



  ngOnInit() {
    setInterval(this.now, 100000);
    setInterval(this.tipIdx++, 100000);
  }

}
