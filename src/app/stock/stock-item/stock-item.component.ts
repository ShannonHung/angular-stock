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
  public stockClasses;

  constructor() { 
    
  }

  ngOnInit(){
    this.stock = new Stock('Test Stock Company', 'TSC', 81, 80);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    //決定要使用哪一種css: positive | negative | large-change | small-change
    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    };
  }

  //點擊時觸發的函式
  toggleFavorite(event) {
    console.log('we are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
