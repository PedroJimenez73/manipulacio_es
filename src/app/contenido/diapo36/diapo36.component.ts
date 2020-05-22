import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

@Component({
  selector: 'app-diapo36',
  templateUrl: './diapo36.component.html',
  styleUrls: ['./diapo36.component.scss']
})
export class Diapo36Component implements OnInit {

    results = [];
    totalAciertos = 0;
    porcentAciertos = 0;
    doughnutChartLabels: Label[];
    doughnutChartData: MultiDataSet;
    doughnutChartType: ChartType = 'doughnut';
    doughnutChartOptions: ChartOptions = {
        responsive: true,
        legend: {
        display: false
        },
    }
    doughnutChartColors = [];
    mensaje: string;
    pass = false;
    
    constructor(private scormStoreService: ScormStoreService) { }

    ngOnInit() {
        for (let i = 7; i < 9; i ++) {
            this.results.push(this.scormStoreService.getResults()[i].result)
        }
        this.results.forEach(elem => {
            if(elem) {
                this.totalAciertos++;
            }
        });
        this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
        this.loadChartResultados();
        if (this.porcentAciertos < 50) {
			this.mensaje = 'Ho sentim, no has superat les activitats. Pots prémer en repassar per estudiar de nou i tornar a contestar les preguntes.';
		} else if (this.porcentAciertos >= 50) {
            this.pass = true;
			this.mensaje = 'Enhorabona, has superat les activitats! Prem Següent per continuar.';
		}
    }
    
    loadChartResultados() {
        let resto = 100 - this.porcentAciertos;
        let color;
        if(this.porcentAciertos >= 50){
            color = '#008489';
        } else if (this.porcentAciertos >= 25){
            color = '#ffb822';
        } else {
            color = '#8f0404';
        }
        this.doughnutChartLabels = ['% Correctas','% Incorrectas'];
        this.doughnutChartData = [[this.porcentAciertos, resto ]];
        this.doughnutChartColors = [
            {
                backgroundColor: [ color, 'lightgrey'],
            },
        ];
    }

    reset() {
        this.scormStoreService.resetUnit3();
    }

}
