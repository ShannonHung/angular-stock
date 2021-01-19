import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item', //app-stock-item是angular預設提供的可以自行改掉名字
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
//讓我們在元件(stock-item.component.ts)初始化時可以取得掛勾 implements OnInit
export class StockItemComponent implements OnInit {

  //定義從HTML存取的各種欄位
  title:"shannon test component";
  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean;

  constructor() { }

  //ngOnInit()在元件初始化時觸發
  ngOnInit(){
    //初始化每個值得欄位
    this.name = 'Test Stock Compoenty: Name';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
  }

  //點擊時觸發的函式
  toggleFavorite(event) {
    console.log('we are toggling the favorite state for this stock', event);
    this.favorite = !this.favorite;
  }
}
