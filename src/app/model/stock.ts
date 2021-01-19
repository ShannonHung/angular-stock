// 可以參考 https://www.typescriptlang.org/docs/handbook/classes.html
export class Stock {
    //Public by default
    public favorite: boolean = false;

    //下面的都是屬性 可以想像成public name: String後在construct裡面this.name= name
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
