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
      this.imgJson = json;
      console.log(imgJson);
    });
    this.tipsJson = this.dataService.getTipsList().subscribe();
   }

   //public imgArr = JSON.parse(this.imgJson);
   //public tipsArr = JSON.parse(this.tipsJson);

   public tip = [
     {id: 1, content: "사람 음식은 너무 짜서 길고양이들에게 주시면 안돼요!"},
     {id: 2, content: "그렇다고 길고양이들한테 너무 잘해주시면 안돼요. 사람한테 경계심을 완전히 풀어버리면 학대의 대상이 되기 쉽답니다."},
     {id: 3, content: "구조가 필요한 아이를 발견하시면, 고양이보호협회 등 길고양이 지원 단체의 도움을 받아보세요."},
     {id: 4, content: "길고양이들에게는 음식도 부족하지만, 사실 물이 제일 귀합니다."}
   ];

   setInterval(this.now, 100000);\

  ngOnInit() {

}
