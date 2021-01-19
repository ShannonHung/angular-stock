import { Component } from '@angular/core';

@Component({
  //他會去尋找index.html中的<app-root>元素
  selector: 'app-root',
  //繪製此元件的html路徑, 這頁是網頁主要顯示區塊裡面的{{title}}是下面AppComponent裡面的key=title的value
  templateUrl: './app.component.html',
  //是陣列，對應模板的樣式表
  styleUrls: ['./app.component.css']
})  
export class AppComponent {
  title = 'shannon-market';
}
