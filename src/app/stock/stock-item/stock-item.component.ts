import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item', //app-stock-item是angular預設提供的可以自行改掉名字
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
//讓我們在元件(stock-item.component.ts)初始化時可以取得掛勾 implements OnInit
export class StockItemComponent implements OnInit {
  
  public stock: Stock;

  constructor() { }

  ngOnInit(){
    this.stock = new Stock('Test Stock Company', 'TSC', 105, 80);
  }

  //點擊時觸發的函式
  toggleFavorite(event) {
    console.log('we are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
