// 可以參考 https://www.typescriptlang.org/docs/handbook/classes.html
export class Stock {
    //Public by default
    public favorite: boolean = false;

    //根據建構元參數的public關鍵字自動產生相對應的屬性
    constructor(
        public name: string,
        public code: string,
        public price: number,
        public previousPrice: number
    ){}

    //class的方法 return boolean
    isPositiveChange(): boolean{
        return this.price >= this.previousPrice;
    }
}
