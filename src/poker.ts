export default class Poker {
    private zScientistLimitMayBeInProject: number;
    private wScientistPerProject: number;
    private kScientistQuantity: number;
    private gGroupOfCards: number;
    private naipeA: any;
    private naipeB: any;
    private naipeC: any;
    private naipeD: any;

    constructor(){
        this.zScientistLimitMayBeInProject = 2;
        this.wScientistPerProject = 8;
        this.kScientistQuantity = 13;
        this.gGroupOfCards = 5;

        // DON'T CHANGE

        this.naipeA = this.generateArrayOfNumbers(1,13);
        this.naipeB = this.generateArrayOfNumbers(14,26);
        this.naipeC = this.generateArrayOfNumbers(27,39);
        this.naipeD = this.generateArrayOfNumbers(40,52);

    }

    generateArrayOfNumbers(initial: number, latest: number): Number[] {
        let arr = [];
        for (let index = initial; index <= latest; index++) {
            arr.push(index);
        }
        return arr;
    }

    generateProjects(){
        let maxOfProjects = Math.floor(this.wScientistPerProject * this.zScientistLimitMayBeInProject / this.gGroupOfCards);
        console.log(maxOfProjects)

        for (let index = 1; index <= maxOfProjects; index++) {
            console.log(`Projeto ${index}: `);
        }
    }


    generateInstance(){
        console.log(`Cientistas (#${this.zScientistLimitMayBeInProject}): `);
        console.log(`Equipa #${this.wScientistPerProject}: `);
        console.log(`Equipa #${this.naipeA}: `);
        console.log(`Equipa #${this.naipeB}: `);
        console.log(`Equipa #${this.naipeC}: `);
        console.log(`Equipa #${this.naipeD}: `);
        this.generateProjects();
    }

    public initGame(): any {
        this.generateInstance();
    }
}