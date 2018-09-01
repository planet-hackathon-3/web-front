import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-tipbar',
  templateUrl: './tipbar.component.html',
  styleUrls: ['./tipbar.component.css']
})

export class TipbarComponent implements OnInit {

  public likeJson;
  public tipsJson;
  public now;
  public hours;
  public minutes;

//  public now = setInterval(new Date(), 10000);

  constructor(private dataService: DataService) {
    this.dataService.getImgList().subscribe((items) => {
      this.likeJson = items.map(item => item['like_count']);
      console.log(this.likeJson);
    });
    this.dataService.getTipsList().subscribe((item) => {
      this.tipsJson = item['content'];
      console.log(this.tipsJson);
    });
    setInterval(this.clock(), 10000);
   }

  clock() {
    this.now = new Date();
    this.hours = this.clockDigit(this.now.getHours());
    this.minutes = this.clockDigit(this.now.getMinutes());
  }

  clockDigit (digit) {
    if (digit < 10) {
      digit = '0' + digit;
    }
    return digit;
  }

  ngOnInit() {
    setInterval(() => {
      this.now = Date.now();
    }, 1000);
}


}
