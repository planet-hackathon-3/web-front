import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {

  constructor() { }

  public imgUrl;
  ngOnInit() {
    this.imgUrl = [
      '../../assets/test01.jpg',
      '../../assets/test02.jpg',
      '../../assets/test03.jpg',
      '../../assets/test04.jpg',
      '../../assets/test05.jpg',
      '../../assets/test06.jpg',
      '../../assets/test07.jpg',
      '../../assets/test08.jpg'
    ];
  }
}
