import Points from "./points";
import { util, rangeCards } from "./utils";


interface ScientistInProject {
    id: string;
    count: number;
}

export interface Project {
    scientst: string[];
    production: number;
}
export default class Poker {
    private zScientistLimitMayBeInProject: number;
    private wScientistPerProject: number;
    private kScientistQuantity: number;
    private gGroupOfCards: number;
    private scientist: string[];
    private cards: number[];
    private naipeA: number[];
    private naipeB: number[];
    private naipeC: number[];
    private naipeD: number[];
    private scientistInProject: ScientistInProject[];
    private projects: Project[];


    constructor(instances: number[]){
        this.scientist = [];
        this.kScientistQuantity = instances[0];   
        this.wScientistPerProject = instances[1];
        this.zScientistLimitMayBeInProject = instances[2];
        this.gGroupOfCards = 5;   // DON'T CHANGE
        this.cards = instances.slice(3,instances.length);
        this.scientistInProject = [];
        this.projects = [];

        this.naipeA = util.generateArrayOfNumbers(rangeCards.a);
        this.naipeB = util.generateArrayOfNumbers(rangeCards.b);
        this.naipeC = util.generateArrayOfNumbers(rangeCards.c);
        this.naipeD = util.generateArrayOfNumbers(rangeCards.d);

    }

    generateProjects(){
        let maxOfProjects = Math.floor(this.wScientistPerProject * this.zScientistLimitMayBeInProject / this.gGroupOfCards);
        for (let index = 1; index <= maxOfProjects; index++) {
            let scientistProject: string[] = [];
            this.scientist.map((value): void => {
               let scientistIndex = this.scientistInProject.findIndex((x) => x.id === value);
               if(scientistProject.length < this.gGroupOfCards){
                    if(scientistIndex !== -1){
                        if(this.scientistInProject[scientistIndex].count !== 0){
                            scientistProject.push(value);
                            this.scientistInProject[scientistIndex].count = this.scientistInProject[scientistIndex].count - 1;
                        }
                    }else{
                        scientistProject.push(value);
                        this.scientistInProject.push({ count: 1, id: value });
                    }
               }
            });
            let production = new Points(scientistProject).getPoints();
            this.projects.push({scientst: scientistProject, production: production});
        }
    }

    getRange(value: number): string {
        let isA, isB, isC, isD;
        
        isA = this.naipeA.findIndex(x => x === value);
        isB = this.naipeB.findIndex(x => x === value);
        isC = this.naipeC.findIndex(x => x === value);
        isD = this.naipeD.findIndex(x => x === value);
        
        if(isA !== -1){
            return `A${isA}`
        }else if(isB !== -1){
            return `B${isB}`
        }else if(isC !== -1){
            return `C${isC}`
        }else if(isD !== -1){
            return `D${isD}`
        }
        return '';
    }

    generateScientistCards(){
        this.cards.map((value): void => {
            this.scientist.push(this.getRange(value));
        });
        console.log(`Cientistas (#${this.zScientistLimitMayBeInProject}): ${this.scientist}`);
    }

    renderTeam(){
        let text: string = "";
        this.scientistInProject.map((value) => {
            text = `${text} ${value.id}#${value.count}`
        });
        console.log(`Equipa #${this.wScientistPerProject}: ${text}`)
    }

    renderProjects(){
        this.projects.map((value, i): void => {
            console.log(`Projeto ${i+1}: ${value.scientst} [Producao]: ${value.production}`)
        })
    }

    public initGame(): any {
        this.generateScientistCards();
        this.generateProjects();
        this.renderTeam();
        this.renderProjects();
    }
}