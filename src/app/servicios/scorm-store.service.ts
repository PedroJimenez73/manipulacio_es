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
        {text:"MANIPULACIÓN DE ALIMENTOS",class:"front-page", menu: false, question: false, page: null},
        {text:"ÍNDICE",class:"regular", menu: true, question: false, page: null},
        {text:"PRESENTACIÓN",class:"regular", menu: true, question: false, page: null},
        {text:"PRESENTACIÓN (II)",class:"regular", menu: false, question: false, page: null},
        {text:"1 INTRODUCCIÓN",class:"regular", menu: true, question: false, page: null},
        {text:"1.1. Normativa vigente",class:"sub", menu: true, question: false, page: null},
        {text:"1.2. Objetivos y definiciones de manipulador de alimentos",class:"sub", menu: true, question: false, page: null},
        {text:"AUTOEVALUACIÓN TEMA 1",class:"regular", menu: true, question: true, page: null}, // 7
        {text:"AUTOEVALUACIÓN TEMA 1",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOEVALUACIÓN TEMA 1",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOEVALUACIÓN TEMA 1",class:"regular", menu: false, question: true, page: null},
        {text:"2 TOXIINFECCIONES ALIMENTARIAS - T.I.A.", class:"regular", menu: true, question: false, page: null},
        {text:"2.1. Transmisión",class:"sub", menu: true, question: false, page: null},
        {text:"2.2. Personas susceptibles",class:"sub", menu: true, question: false, page: null},
        {text:"2.3. Agentes contaminantes",class:"sub", menu: true, question: false, page: null},
        {text:"2.3. Agentes contaminantes (II)",class:"sub", menu: false, question: false, page: null},
        {text:"AUTOEVALUACIÓN TEMA 2",class:"regular", menu: true, question: true, page: null}, // 16
        {text:"AUTOEVALUACIÓN TEMA 2",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOEVALUACIÓN TEMA 2",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOEVALUACIÓN TEMA 2",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOEVALUACIÓN TEMA 2",class:"regular", menu: false, question: true, page: null},
        {text:"3. MICROORGANISMOS",class:"regular", menu: true, question: false, page: null},
        {text:"",class:"sub", menu: false, question: false, page: null},
        {text:"3.1. Tipos",class:"sub", menu: true, question: false, page: null},
        {text:"3.2. Qué favorece su desarrollo: alimento, temperatura, tiempo, ph y agua",class:"sub", menu: true, question: false, page: null},
        {text:"1.	Alimento",class:"only-title", menu: false, question: false, page: null},
        {text:"2.	Temperatura ",class:"only-title", menu: false, question: false, page: null},
        {text:"",class:"only-title", menu: false, question: false, page: null},
        {text:"3.	Tiempo",class:"only-title", menu: false, question: false, page: null},
        {text:"",class:"only-title", menu: false, question: false, page: null},
        {text:"4.	Agua y humedad",class:"only-title", menu: false, question: false, page: null},
        {text:"5.	PH",class:"only-title", menu: false, question: false, page: null},
        {text:"3.3. Acción patógena",class:"sub", menu: true, question: false, page: null},
        {text:"3.4. Toxinas y esporas",class:"sub", menu: true, question: false, page: null},
        {text:"",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOAVALUACIÓN TEMA 3",class:"regular", menu: true, question: true, page: null}, // 35
        {text:"AUTOAVALUACIÓN TEMA 3",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOAVALUACIÓN TEMA 3",class:"regular", menu: false, question: true, page: null},
        {text:"4. PRINCIPALES MICROORGANISMOS IMPLICADOSS EN LAS T.I.A.",class:"regular", menu: true, question: false, page: null},
        {text:"4.1. Salmonella",class:"sub", menu: true, question: false, page: null},
        {text:"",class:"sub", menu: false, question: false, page: null},
        {text:"Resumen Salmonella",class:"only-title", menu: false, question: false, page: null},
        {text:"4.2. E. Coli",class:"sub", menu: true, question: false, page: null},
        {text:"Resumen E. Coli",class:"only-title", menu: false, question: false, page: null},
        {text:"4.3. Clostridium Botulinum",class:"sub", menu: true, question: false, page: null},
        {text:"Resumen Clostridium Botulinum",class:"only-title", menu: false, question: false, page: null},
        {text:"4.4. Staphilococcus Aureus",class:"sub", menu: true, question: false, page: null},
        {text:"Resumen Staphilococcus Aureus",class:"only-title", menu: false, question: false, page: null},
        {text:"4.5. Listeria Monocytogens",class:"sub", menu: true, question: false, page: null},
        {text:"Resumen Listeria Monocytogens",class:"only-title", menu: false, question: false, page: null},
        {text:"4.6. Anisakis",class:"sub", menu: true, question: false, page: null},
        {text:"Resumen Anisakis",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOAVALUACIÓN TEMA 4",class:"regular", menu: true, question: true, page: null}, // 52
        {text:"AUTOAVALUACIÓN TEMA 4",class:"regular", menu: false, question: true, page: null},
        {text:"5. LOS ALIMENTOS",class:"regular", menu: true, question: false, page: null},
        {text:"5.1. Alimentos de más riesgo y consejos de manipulación", class:"sub", menu: true, question: false, page: null},
        {text:"Fruta y verdura",class:"only-title", menu: false, question: false, page: null},
        {text:"Productos congelados",class:"only-title", menu: false, question: false, page: null},
        {text:"Conservas",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOAVALUACIÓN TEMA 5",class:"regular", menu: true, question: true, page: null}, // 59
        {text:"AUTOAVALUACIÓN TEMA 5",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOAVALUACIÓN TEMA 5",class:"regular", menu: false, question: true, page: null},
        {text:"6. CONTAMINACIÓN CRUZADA",class:"regular", menu: true, question: false, page: null},
        {text:"",class:"only-title", menu: false, question: false, page: null},
        {text:"Conclusión",class:"only-title", menu: false, question: false, page: null},
        {text:"Zonas limpias y sucias",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOEVALUACIÓN TEMA 6",class:"regular", menu: true, question: true, page: null}, //66
        {text:"AUTOEVALUACIÓN TEMA 6",class:"regular", menu: false, question: true, page: null},
        {text:"AUTOEVALUACIÓN TEMA 6",class:"regular", menu: false, question: true, page: null},
        {text:"7. NORMAS DE CADA ZONA",class:"regular", menu: true, question: false, page: null},
        {text:"7.1. Recepción y almacenaje",class:"sub", menu: true, question: false, page: null},
        {text:"Temperatura de conservación",class:"only-title", menu: false, question: false, page: null},
        {text:"7.2. Preparación",class:"sub", menu: true, question: false, page: null},
        {text:"7.3. Cocción",class:"sub", menu: true, question: false, page: null},
        {text:"7.4. Enfriamiento",class:"sub", menu: true, question: false, page: null},
        {text:"7.5. Servicio",class:"sub", menu: true, question: false, page: null},
        {text:"7.6. Distribución y transporte",class:"sub", menu: true, question: false, page: null},
        {text:"7.7. Conclusión",class:"sub", menu: true, question: false, page: null},
        {text:"AUTOEVALUACIÓN TEMA 7",class:"regular", menu: true, question: true, page: null}, // 78
        {text:"AUTOEVALUACIÓN TEMA 7",class:"regular", menu: false, question: true, page: null},
        {text:"8. MEDIDAS PARA GARANTIZAR LA SEGURIDAD DE LOS ALIMENTOS", class:"regular", menu: true, question: false, page: null},
        {text:"Prevención en la manipulación de alimentos",class:"only-title", menu: false, question: false, page: null},
        {text:"8.1. Higiene personal",class:"sub", menu: true, question: false, page: null},
        {text:"8.2. Higiene en el trabajo",class:"sub", menu: true, question: false, page: null},
        {text:"8.3. Higiene de manos",class:"sub", menu: true, question: false, page: null},
        {text:"Indicaciones del lavado de manos",class:"only-title", menu: false, question: false, page: null},
        {text:"Lavado higiénico de manos",class:"only-title", menu: false, question: false, page: null},
        {text:"8.4. Modificación hábitos de higiene",class:"sub", menu: true, question: false, page: null},
        {text:"8.5. Limpieza y desinfección",class:"sub", menu: true, question: false, page: null},
        {text:"¿Cómo limpiar?",class:"only-title", menu: false, question: false, page: null},
        {text:"¿Cómo hacer una buena limpieza?",class:"only-title", menu: false, question: false, page: null},
        {text:"Limpieza y desinfección de las basuras",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOEVALUACIÓN TEMA 8",class:"regular", menu: true, question: true, page: null}, // 92
        {text:"AUTOEVALUACIÓN TEMA 8",class:"regular", menu: false, question: true, page: null},
        {text:"9. AUTOCONTROLES, ANALISIS DE PELIGROS Y PUNTOS CRÍTICOS: APPCC", class:"regular", menu: true, question: false, page: null},
        {text:"9.1. Definición de calidad",class:"sub", menu: true, question: false, page: null},
        {text:"Legalidad",class:"only-title", menu: false, question: false, page: null},
        {text:"9.2. Manual de buenas prácticas",class:"sub", menu: true, question: false, page: null},
        {text:"9.3. Responsabilidad",class:"sub", menu: true, question: false, page: null},
        {text:"9.4. Sistema de APPCC",class:"sub", menu: true, question: false, page: null},
        {text:"Control del agua",class:"only-title", menu: false, question: false, page: null},
        {text:"Control de limpieza y desinfección",class:"only-title", menu: false, question: false, page: null},
        {text:"Control de plagas",class:"only-title", menu: false, question: false, page: null},
        {text:"Control de capacitación de manipuladores (formación de personal)",class:"only-title", menu: false, question: false, page: null},
        {text:"Control de la trazabilidad",class:"only-title", menu: false, question: false, page: null},
        {text:"Control de alérgenos",class:"only-title", menu: false, question: false, page: null},
        {text:"AUTOEVALUACIÓN TEMA 9",class:"regular", menu: true, question: true, page: null}, // 106
        {text:"AUTOEVALUACIÓN TEMA 9",class:"regular", menu: false, question: true, page: null},
        {text:"10. IMPORTANCIA DE LA CORRECTA MANIPULACIÓN.", class:"regular", menu: true, question: false, page: null},
        {text:"",class:"only-title", menu: false, question: false, page: null},
        {text:"RESUMEN DE AUTOEVALUACIÓN",class:"regular", menu: true, question: false, page: null},
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
            if(window.ScormProcessGetValue("cmi.core.lesson_location", false)){
                this.indexPantalla = window.ScormProcessGetValue("cmi.core.lesson_location", false);
                this.navTo(this.indexPantalla);
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
