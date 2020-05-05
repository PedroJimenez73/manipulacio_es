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
        {text:"MANIPULADOR D'ALIMENTS",class:"front-page", menu: false, question: false, page: null},
        {text:"ÍNDEX",class:"regular", menu: true, question: false, page: null},
        {text:"PRESENTACIÓ",class:"regular", menu: true, question: false, page: null},
        {text:"PRESENTACIÓ (II)",class:"regular", menu: false, question: false, page: null},
        {text:"1 INTRODUCCIÓ",class:"regular", menu: true, question: false, page: null},
        {text:"1.1 Normativa vigent",class:"sub", menu: true, question: false, page: null},
        {text:"1.2 Objectiu i definicions de manipulador d’aliments",class:"sub", menu: true, question: false, page: null},
        {text:"AUTOAVALUACIÓ TEMA 1",class:"regular", menu: true, question: true, page: null}, // 7
        {text:"AUTOAVALUACIÓ TEMA 1",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOAVALUACIÓ TEMA 1",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOAVALUACIÓ TEMA 1",class:"regular", menu: false, question: true, page: null},
        {text:"2 TOXIINFECCIONS ALIMENTÀRIES - T.I.A.", class:"regular", menu: true, question: false, page: null},
        {text:"2.1 Transmissió",class:"sub", menu: true, question: false, page: null},
        {text:"2.2 Persones susceptibles",class:"sub", menu: true, question: false, page: null},
        {text:"2.3 Agents contaminants",class:"sub", menu: true, question: false, page: null},
        {text:"2.3 Agents contaminants (II)",class:"sub", menu: false, question: false, page: null},
        {text:"AUTOAVALUACIÓ TEMA 2",class:"regular", menu: true, question: true, page: null}, // 16
        {text:"AUTOAVALUACIÓ TEMA 2",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOAVALUACIÓ TEMA 2",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOAVALUACIÓ TEMA 2",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOAVALUACIÓ TEMA 2",class:"regular", menu: false, question: true, page: null},
        {text:"3. MICROORGANISMES",class:"regular", menu: true, question: false, page: null},
        {text:"",class:"sub", menu: false, question: false, page: null},
        {text:"3.1. Tipus",class:"sub", menu: true, question: false, page: null},
        {text:"3.2. Què afavoreix el seu desenvolupament: aliment, temperatura, temps, ph i aigua",class:"sub", menu: true, question: false, page: null},
        {text:"1.	Aliment",class:"only-title", menu: false, question: false, page: null},
        {text:"2.	Temperatura ",class:"only-title", menu: false, question: false, page: null},
        {text:"",class:"only-title", menu: false, question: false, page: null},
        {text:"3.	Temps",class:"only-title", menu: false, question: false, page: null},
        {text:"",class:"only-title", menu: false, question: false, page: null},
        {text:"4.	Aigua i humitat",class:"only-title", menu: false, question: false, page: null},
        {text:"5.	PH",class:"only-title", menu: false, question: false, page: null},
        {text:"3.3. Acció patògena",class:"sub", menu: true, question: false, page: null},
        {text:"3.4. Toxines i espores",class:"sub", menu: true, question: false, page: null},
        {text:"",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOAVALUACIÓ TEMA 3",class:"regular", menu: true, question: true, page: null}, // 35
        {text:"AUTOAVALUACIÓ TEMA 3",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOAVALUACIÓ TEMA 3",class:"regular", menu: false, question: true, page: null},
        {text:"4. PRINCIPALS MICROORGANISMES IMPLICATS EN LES T.I.A.",class:"regular", menu: true, question: false, page: null},
        {text:"4.1. Salmonel·la",class:"sub", menu: true, question: false, page: null},
        {text:"",class:"sub", menu: false, question: false, page: null},
        {text:"Resum Salmonel·la",class:"only-title", menu: false, question: false, page: null},
        {text:"4.2. E. Coli",class:"sub", menu: true, question: false, page: null},
        {text:"Resum E. Coli",class:"only-title", menu: false, question: false, page: null},
        {text:"4.3. Clostridium Botulinum",class:"sub", menu: true, question: false, page: null},
        {text:"Resum Clostridium Botulinum",class:"only-title", menu: false, question: false, page: null},
        {text:"4.4. Staphilococcus Aureus",class:"sub", menu: true, question: false, page: null},
        {text:"Resum Staphilococcus Aureus",class:"only-title", menu: false, question: false, page: null},
        {text:"4.5. Listeria Monocytogens",class:"sub", menu: true, question: false, page: null},
        {text:"Resum Listeria Monocytogens",class:"only-title", menu: false, question: false, page: null},
        {text:"4.6. Anisakis",class:"sub", menu: true, question: false, page: null},
        {text:"Resum Anisakis",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOAVALUACIÓ TEMA 4",class:"regular", menu: true, question: true, page: null}, // 52
        {text:"AUTOAVALUACIÓ TEMA 4",class:"regular", menu: false, question: true, page: null},
        {text:"5. ELS ALIMENTS",class:"regular", menu: true, question: false, page: null},
        {text:"5.1. Aliments de mes risc i consells de manipulació", class:"sub", menu: true, question: false, page: null},
        {text:"Fruita i verdura",class:"only-title", menu: false, question: false, page: null},
        {text:"Productes congelats",class:"only-title", menu: false, question: false, page: null},
        {text:"Conserves",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOAVALUACIÓ TEMA 5",class:"regular", menu: true, question: true, page: null}, // 59
        {text:"AUTOAVALUACIÓ TEMA 5",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOAVALUACIÓ TEMA 5",class:"regular", menu: false, question: true, page: null},
        {text:"6. CONTAMINACIÓ CREUADA",class:"regular", menu: true, question: false, page: null},
        {text:"",class:"only-title", menu: false, question: false, page: null},
        {text:"Conclusió",class:"only-title", menu: false, question: false, page: null},
        {text:"Zones netes i brutes",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOAVALUACIÓ TEMA 6",class:"regular", menu: true, question: true, page: null}, //66
        {text:"AUTOAVALUACIÓ TEMA 6",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOAVALUACIÓ TEMA 6",class:"regular", menu: false, question: true, page: null},
        {text:"7. NORMES DE CADA ZONA",class:"regular", menu: true, question: false, page: null},
        {text:"7.1. Recepció i emmagatzematge",class:"sub", menu: true, question: false, page: null},
        {text:"Temperatura de conservació",class:"only-title", menu: false, question: false, page: null},
        {text:"7.2. Preparació",class:"sub", menu: true, question: false, page: null},
        {text:"7.3. Cocció",class:"sub", menu: true, question: false, page: null},
        {text:"7.4. Refredament",class:"sub", menu: true, question: false, page: null},
        {text:"7.5. Servei",class:"sub", menu: true, question: false, page: null},
        {text:"7.6. Distribució i transport",class:"sub", menu: true, question: false, page: null},
        {text:"7.7. Conclusió",class:"sub", menu: true, question: false, page: null},
        {text:"AUTOAVALUACIÓ TEMA 7",class:"regular", menu: true, question: true, page: null}, // 78
        {text:"AUTOAVALUACIÓ TEMA 7",class:"regular", menu: false, question: true, page: null},
        {text:"8. MESURES PER GARANTIR LA SEGURETAT DELS ALIMENTS", class:"regular", menu: true, question: false, page: null},
        {text:"Prevenció en la manipulació d’aliments",class:"only-title", menu: false, question: false, page: null},
        {text:"8.1. Higiene personal",class:"sub", menu: true, question: false, page: null},
        {text:"8.2. Higiene a la feina",class:"sub", menu: true, question: false, page: null},
        {text:"8.3. Higiene de mans",class:"sub", menu: true, question: false, page: null},
        {text:"Indicacions del rentat de mans",class:"only-title", menu: false, question: false, page: null},
        {text:"Rentat de mans higiènic",class:"only-title", menu: false, question: false, page: null},
        {text:"8.4. Modificació hàbits higiènics",class:"sub", menu: true, question: false, page: null},
        {text:"8.5. Neteja i desinfecció",class:"sub", menu: true, question: false, page: null},
        {text:"Com netejar?",class:"only-title", menu: false, question: false, page: null},
        {text:"Com fer una bona neteja?",class:"only-title", menu: false, question: false, page: null},
        {text:"Neteja i desinfecció de les escombraries",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOAVALUACIÓ TEMA 8",class:"regular", menu: true, question: true, page: null}, // 92
        {text:"AUTOAVALUACIÓ TEMA 8",class:"regular", menu: false, question: true, page: null},
        {text:"9. AUTOCONTROLS, ANÀLISI DE PERILLS I PUNTS CRÍTICS: APPCC", class:"regular", menu: true, question: false, page: null},
        {text:"9.1. Definició de qualitat",class:"sub", menu: true, question: false, page: null},
        {text:"Legalitat",class:"only-title", menu: false, question: false, page: null},
        {text:"9.2. Manual de bones pràctiques",class:"sub", menu: true, question: false, page: null},
        {text:"9.3. Responsabilitat",class:"sub", menu: true, question: false, page: null},
        {text:"9.4. Sistema d’APPCC",class:"sub", menu: true, question: false, page: null},
        {text:"Control de l’aigua",class:"only-title", menu: false, question: false, page: null},
        {text:"Control de neteja i desinfecció",class:"only-title", menu: false, question: false, page: null},
        {text:"Control de plagues",class:"only-title", menu: false, question: false, page: null},
        {text:"Control de capacitació de manipuladors (formació de personal)",class:"only-title", menu: false, question: false, page: null},
        {text:"Control de la traçabilitat",class:"only-title", menu: false, question: false, page: null},
        {text:"Control d’al·lèrgens",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOAVALUACIÓ TEMA 9",class:"regular", menu: true, question: true, page: null}, // 106
        {text:"AUTOAVALUACIÓ TEMA 9",class:"regular", menu: false, question: true, page: null},
        {text:"10. IMPORTÀNCIA DE LA CORRECTA MANIPULACIÓ.", class:"regular", menu: true, question: false, page: null},
        {text:"",class:"only-title", menu: false, question: false, page: null},
        {text:"RESUM D'AUTOAVALUACIÓ",class:"regular", menu: true, question: false, page: null},
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
        this.diapos.forEach((element, i) => {
            this.diapos[i].page = i;
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

    resetUnit1() {
        for (let i = 7; i < 11; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 0; i < 3; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(2);
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

    passUnit1() {
        this.progress[10][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit2() {
        for (let i = 16; i < 21; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 3; i < 7; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(11);
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
        } else {
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }
    }

    passUnit2() {
        this.progress[20][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit3() {
        for (let i = 35; i < 37; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 7; i < 9; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(21);
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

    passUnit3() {
        this.progress[37][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit4() {
        for (let i = 52; i < 53; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 9; i < 10; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(38);
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

    passUnit4() {
        this.progress[53][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit5() {
        for (let i = 59; i < 61; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 10; i < 12; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(54);
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

    passUnit5() {
        this.progress[61][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit6() {
        for (let i = 66; i < 68; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 12; i < 14; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(62);
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

    passUnit6() {
        this.progress[68][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit7() {
        for (let i = 78; i < 79; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 14; i < 15; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(69);
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

    passUnit7() {
        this.progress[79][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit8() {
        for (let i = 92; i < 93; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 15; i < 16; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(80);
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

    passUnit8() {
        this.progress[93][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit9() {
        for (let i = 106; i < 107; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 16; i < 17; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(94);
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

    passUnit9() {
        this.progress[107][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
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
