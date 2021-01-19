import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//ng generate後會自動import stock-item.component
import { StockItemComponent } from './stock/stock-item/stock-item.component';

//TypeScripe標記 指出此類別定義為第一個Angular模組
@NgModule({
    //宣告應用程式中使用的元件與指示
  declarations: [
    AppComponent, //自己本身宣告要使用的原件
    StockItemComponent //ng generate後會自動宣告應用程式中使用的元件
  ],
  //匯入其他功能模組
  imports: [
    BrowserModule
  ],
  providers: [],
  //啟動程式的進入點元件
  bootstrap: [AppComponent]
})
export class AppModule { }
