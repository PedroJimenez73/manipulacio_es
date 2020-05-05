import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    pantallaIndex = 0;
    total = 0
    item: any;
    showNext = true;

    subscripState: Subscription;
    results = [];
    totalAciertos = 0;
    porcentAciertos: number;

    constructor(private scormStoreService: ScormStoreService) { }

    ngOnInit() {
        this.total = this.scormStoreService.getInitialState() - 1;
        this.subscripState = this.scormStoreService.state$
                                .subscribe(
                                    (data: any) => {
                                        this.pantallaIndex = data.currentPantalla;
                                        if (data.progress[data.currentPantalla][1]) {
                                            this.showNext = false;
                                        } else {
                                            this.showNext = true;
                                        }
                                    },
                                    (error:any) => {console.log(error)
                                });
    }

    prevPantalla() {
        this.scormStoreService.prevPantalla()
    }

    nextPantalla() {
        if(this.pantallaIndex === 9) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 0; i < 3; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 50) {
                this.scormStoreService.passUnit1();
            }
        }
        if(this.pantallaIndex === 19) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 3; i < 7; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 50) {
                this.scormStoreService.passUnit2();
            }
        }
        if(this.pantallaIndex === 36) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 7; i < 9; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 50) {
                this.scormStoreService.passUnit3();
            }
        }
        if(this.pantallaIndex === 52) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 9; i < 10; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 50) {
                this.scormStoreService.passUnit4();
            }
        }
        if(this.pantallaIndex === 60) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 10; i < 12; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 50) {
                this.scormStoreService.passUnit5();
            }
        }
        if(this.pantallaIndex === 67) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 12; i < 14; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 50) {
                this.scormStoreService.passUnit6();
            }
        }
        if(this.pantallaIndex === 78) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 14; i < 15; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 50) {
                this.scormStoreService.passUnit7();
            }
        }
        if(this.pantallaIndex === 92) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 15; i < 16; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            console.log(this.results);
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 50) {
                this.scormStoreService.passUnit8();
            }
        }
        if(this.pantallaIndex === 106) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 16; i < 17; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 50) {
                this.scormStoreService.passUnit9();
            }
        }
        this.scormStoreService.nextPantalla()
    }

    exit() {
        this.scormStoreService.exit();
    }

}
