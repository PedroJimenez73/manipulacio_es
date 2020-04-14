import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

declare var window: any;

class result  {
    answersChecked: any;
    result: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ScormStoreService {

    diapos = [
        {text:"MANIPULADOR D'ALIMENTS",class:"front-page", menu: false, question: false, page: 0},
        {text:"ÍNDICE",class:"regular", menu: true, question: false, page: 1},
        {text:"PRESENTACIÓ",class:"regular", menu: true, question: false, page: 2},
        {text:"PRESENTACIÓ (II)",class:"regular", menu: false, question: false, page: 3},
        {text:"1 INTRODUCCIÓ",class:"regular", menu: true, question: false, page: 4},
        {text:"1.1 Normativa vigent",class:"sub", menu: true, question: false, page: 5},
        {text:"1.2 Objectiu i definicions de manipulador d’aliments",class:"sub", menu: true, question: false, page: 6},
        {text:"AUTOAVALUACIÓ TEMA 1",class:"regular", menu: true, question: true, page: 7},
        {text:"AUTOAVALUACIÓ TEMA 1",class:"regular", menu: false, question: true, page: 8},
        {text:"AUTOAVALUACIÓ TEMA 1",class:"regular", menu: false, question: true, page: 9},
        {text:"AUTOAVALUACIÓ TEMA 1",class:"regular", menu: false, question: false, page: 10},
        {text:"2 TOXIINFECCIONS ALIMENTÀRIES - T.I.A.", class:"regular", menu: true, question: false, page: 11},
        {text:"2.1 Transmissió",class:"sub", menu: true, question: false, page: 12},
        {text:"2.2 Persones susceptibles",class:"sub", menu: true, question: false, page: 13},
        {text:"2.3 Agents contaminants",class:"sub", menu: true, question: false, page: 14},
        {text:"2.3 Agents contaminants (II)",class:"sub", menu: false, question: false, page: 15},
        {text:"AUTOAVALUACIÓ TEMA 2",class:"regular", menu: true, question: true, page: 16},
        {text:"AUTOAVALUACIÓ TEMA 2",class:"regular", menu: false, question: true, page: 17},
        {text:"AUTOAVALUACIÓ TEMA 2",class:"regular", menu: false, question: true, page: 18},
        {text:"AUTOAVALUACIÓ TEMA 2",class:"regular", menu: false, question: true, page: 19},
        {text:"AUTOAVALUACIÓ TEMA 2",class:"regular", menu: false, question: false, page: 20},
        {text:"3. MICROORGANISMES",class:"regular", menu: true, question: false, page: 21},
        {text:"",class:"sub", menu: false, question: false, page: 22},
        {text:"3.1. Tipus",class:"sub", menu: true, question: false, page: 23},
        {text:"3.2. Què afavoreix el seu desenvolupament: aliment, temperatura, temps, ph i aigua",class:"sub", menu: true, question: false, page: 24},
        {text:"1.	Aliment",class:"only-title", menu: false, question: false, page: 25},
        {text:"2.	Temperatura ",class:"only-title", menu: false, question: false, page: 26},
        {text:"3.	Temps",class:"only-title", menu: false, question: false, page: 27},
        {text:"4.	Aigua i humitat",class:"only-title", menu: false, question: false, page: 28},
        {text:"5.	PH",class:"only-title", menu: false, question: false, page: 29},
        {text:"3.3. Acció patògena",class:"sub", menu: true, question: false, page: 30},
        {text:"3.4. Toxines i espores",class:"sub", menu: true, question: false, page: 31},
        {text:"",class:"sub", menu: false, question: false, page: 32},
        {text:"AUTOAVALUACIÓ TEMA 3",class:"regular", menu: true, question: true, page: 33},
        {text:"AUTOAVALUACIÓ TEMA 3",class:"regular", menu: false, question: true, page: 34},
        {text:"AUTOAVALUACIÓ TEMA 3",class:"regular", menu: false, question: true, page: 35},
        {text:"AUTOAVALUACIÓ TEMA 3",class:"regular", menu: false, question: false, page: 36},
        {text:"4. PRINCIPALS MICROORGANISMES IMPLICATS EN LES T.I.A.",class:"regular", menu: true, question: false, page: 37},
        {text:"4.1. Salmonel·la",class:"sub", menu: true, question: false, page: 38},
        {text:"",class:"sub", menu: false, question: false, page: 39},
        {text:"Resum Salmonel·la",class:"only-title", menu: false, question: false, page: 40},
        {text:"4.2. E. Coli",class:"sub", menu: true, question: false, page: 41},
        {text:"Resum E. Coli",class:"only-title", menu: false, question: false, page: 42},
        {text:"4.3. Clostridium Botulinum",class:"sub", menu: true, question: false, page: 43},
        {text:"Resum Clostridium Botulinum",class:"only-title", menu: false, question: false, page: 44},
        {text:"4.4. Staphilococcus Aureus",class:"sub", menu: true, question: false, page: 45},
        {text:"Resum Staphilococcus Aureus",class:"only-title", menu: false, question: false, page: 46},
        {text:"4.5. Listeria Monocytogens",class:"sub", menu: true, question: false, page: 47},
        {text:"Resum Listeria Monocytogens",class:"only-title", menu: false, question: false, page: 48},
        {text:"4.6. Anisakis",class:"sub", menu: true, question: false, page: 49},
        {text:"Resum Anisakis",class:"only-title", menu: false, question: false, page: 50},
        {text:"AUTOAVALUACIÓ TEMA 4",class:"regular", menu: true, question: true, page: 51},
        {text:"AUTOAVALUACIÓ TEMA 4",class:"regular", menu: false, question: false, page: 52},
        {text:"5. ELS ALIMENTS",class:"regular", menu: true, question: false, page: 53},
        {text:"5.1. Aliments de mes risc i consells de manipulació", class:"sub", menu: true, question: false, page: 54},
        {text:"Fruita i verdura",class:"only-title", menu: false, question: false, page: 55},
        {text:"Productes congelats",class:"only-title", menu: false, question: false, page: 56},
        {text:"Conserves",class:"only-title", menu: false, question: false, page: 57},
        {text:"AUTOAVALUACIÓ TEMA 5",class:"regular", menu: true, question: true, page: 58},
        {text:"AUTOAVALUACIÓ TEMA 5",class:"regular", menu: false, question: true, page: 59},
        {text:"AUTOAVALUACIÓ TEMA 5",class:"regular", menu: false, question: false, page: 60},
        {text:"RESUM D'AUTOAVALUACIÓ",class:"regular", menu: true, question: false, page: 61},
    ];

    indexPantalla = 0;
    
    // To save char in cmi array have [menu, question, learned]
    progress = [];

    results = [];

    cmiStore = {
        progress: [],
        results: []
    }

    constructor() { 
        this.diapos.forEach(element => {
            this.progress.push([element.menu, element.question, false]);
            if(element.question === true) {
                this.results.push({answersChecked: null, result: false});
            }
        });
        setTimeout(()=> {
            if(window.ScormProcessGetValue("cmi.core.lesson_location", false)){
                this.indexPantalla = window.ScormProcessGetValue("cmi.core.lesson_location", false);
                this.navTo(this.indexPantalla);
            }
            if (window.ScormProcessGetValue("cmi.suspend_data")) {
                this.cmiStore = JSON.parse(window.ScormProcessGetValue("cmi.suspend_data"));
                this.progress = this.cmiStore.progress;
                this.results = this.cmiStore.results;
            } else {
                this.cmiStore = {
                    progress: this.progress,
                    results: this.results
                }
            }
        }, 750);
    }

    private stateIn: BehaviorSubject<any> = new BehaviorSubject<any>({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});

    state$: Observable<any> = this.stateIn.asObservable();

    getInitialState() {
        return this.diapos.length;
    }

    prevPantalla() {
        this.indexPantalla--;
        this.navToPage();
    }

    nextPantalla() {
        this.indexPantalla++;
        this.progress[this.indexPantalla][2] = true;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        this.navToPage();
    }

    navTo(e) {
        this.indexPantalla = e;
        this.navToPage();
    }

    navToPage() {
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
        window.ScormProcessSetValue("cmi.core.lesson_location", (this.indexPantalla).toString());
        if (this.indexPantalla === (this.diapos.length - 1)){
            // reachedEnd = true;
            window.ScormProcessSetValue("cmi.core.lesson_status", "completed");
        }
    }

    getResults() {
        return this.results;
    }

    setResults(id, answersChecked, result) {
        this.results[id - 1] = {answersChecked: answersChecked, result: result};
        this.progress[this.indexPantalla][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
        this.cmiStore.results = this.results;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }
    }

    getAswersChecked(id) {
        if(this.results[id - 1] !== null) {
            return this.results[id - 1].answersChecked;
        } else {
            return false
        }
    }

    exit() {
        window.open(window.location, '_self').close();
        window.ScormProcessSetValue("cmi.core.exit", "suspend");
    }

    reset() {
        this.navTo(1);
        this.results = [];
        this.progress = [];
        this.diapos.forEach(element => {
            this.progress.push([element.menu, element.question, false]);
            if(element.question === true) {
                this.results.push({answersChecked: null, result: false});
            }
        });
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }
    }

}
