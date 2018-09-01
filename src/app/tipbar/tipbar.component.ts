import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tipbar',
  templateUrl: './tipbar.component.html',
  styleUrls: ['./tipbar.component.css']
})

export class TipbarComponent implements OnInit {

  public imgJson;
  public tipsJson;
  public now = new Date();
  public tipIdx = 0;

  constructor(private dataService: DataService) {
    this.dataService.getImgList().subscribe((json) => {
    });
   }
}
