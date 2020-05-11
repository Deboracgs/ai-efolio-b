import { rangeCards, util } from "./utils";

interface Counter{
    number: number;
    count:number;
}
export default class Points {
    private points: number;
    private scientists: string[];
    private naipes: any;
    constructor(cards: string[]){
        this.points = 0;
        this.scientists = cards;
        this.naipes = { 
            a: util.generateArrayOfNumbers(rangeCards.a), 
            b: util.generateArrayOfNumbers(rangeCards.b),
            c: util.generateArrayOfNumbers(rangeCards.c),
            d: util.generateArrayOfNumbers(rangeCards.d),
        };

    }

    groupCount(): Counter[] {
        let data: Counter[] = [];
        for(let value of this.scientists){
            let exists = false;
            let numero = this.getNumber(value);
            let tempObj: Counter = {
                number: numero,
                count: 1
            };

            for(let item of data){
                if(item.number === tempObj.number){
                    item.count++;
                    exists = true;
                    break;
                }
            }

            if(!exists){
                data.push(tempObj);
            }
        }

        return data;
    }
    getNaipe(value: string): any {
        return value.substr(0, 1).toLocaleLowerCase();
    }

    getNumber(value: string): any {
        let naipe = this.getNaipe(value);
        let number = value.substr(1, value.length);
        return this.naipes[naipe][number];
    }


    sequenciaECor() {
        let checkNaipes = false;
        let checkNumbers = false;
        this.scientists.map((value, i): void => {
            let next = this.scientists[i-1];
            let naipe = this.getNaipe(value);
            let cardNumber = this.getNumber(value);
            if(i === 0){
                checkNaipes = true;
                checkNumbers=  true;
            }else{
                checkNaipes = naipe === this.getNaipe(next);
                checkNumbers =  this.getNumber(next) === cardNumber - 1;
            }
        });
        this.points =  checkNaipes && checkNumbers ? this.points + 50 : this.points;
    }
    counter(limit: number, points: number){
        let count = 0;
        this.scientists.map((value, i): void => {
            let next = this.scientists[i-1];
            if(i === 0){
                count=  1;
            }else{
                count =  count + this.getNumber(value) === this.getNumber(next) ? 1 : 0; 
            }
        });
        this.points =  count >= limit ? this.points + points : this.points;
    }

    poker(){
       this.counter(4, 20);
    }

    fullen(){
        
        let counter = this.groupCount();
        let three = false;
        let two = false;
        counter.map((value, i) => {
            if(value.count === 3){
                three = true;
            }else if(value.count === 2){
                two = true;
            }
        });
        this.points = three && two ? this.points + 10 : this.points; 
    }

    cor(){
        let count = 0;
        this.scientists.map((value, i): void => {
            let naipe = this.getNaipe(value);
            let next = this.scientists[i-1];
            if(i === 0){
                count = 1;
            }else{
                count = naipe === this.getNaipe(next) ? count +1 : count;
            }
        });
        this.points =  count === 5 ? this.points + 5 : this.points;
    }

    sequencia(){
        let count = 0;
        this.scientists.map((value, i): void => {
            let next = this.scientists[i-1];
            if(i === 0){
                count=  1;
            }else{
                count =   this.getNumber(value) - 1 === this.getNumber(next) ? count +1 : count;
            }
        });
        this.points = count === 5 ? this.points + 4 : this.points;
    }

    trio(){
        this.counter(3, 3);
    }

    doisPares(){
        let counter = this.groupCount();
        let two = false;
        counter.map((value, i) => {
            if(value.count === 2){
                two = true;
            }
        });
        this.points = two ? this.points + 2 : this.points; 
    }

    par(){
        this.counter(2, 1);
    }

    getPoints(): number {
        this.sequenciaECor();
        this.poker();
        this.fullen();
        this.cor();
        this.sequencia();
        this.trio();
        this.doisPares();
        this.par();

        return this.points;
    }
}