import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

declare var $: any;

@Component({
  selector: 'app-diapo-s6-p6',
  templateUrl: './diapo-s6-p6.component.html',
  styleUrls: ['./diapo-s6-p6.component.scss']
})
export class DiapoS6P6Component implements OnInit {

    showMensaje = false;
    lockInput = false;
    form: FormGroup;
    abcAnswers = ['a','b','c','d','e','f','g','h','i','j'];
    answersChecked = [];
    result: boolean;
    @ViewChildren('labelsRef') labelsRef: QueryList<ElementRef>;
    elementosLabelsRef = [];
    @ViewChildren('inputsRef') inputsRef: QueryList<ElementRef>;
    elementosInputsRef = [];

    pregunta = {
        id: '14',
        question: 'Per evitar la contaminació creuada:',
        answers: [
            'Evitar contacte entre aliments crus i cuinats.',
            'Netejar les superfícies i útils després de cada ús.',
            'Netejar mans després de manipular aliments crus.',
            'Netejar fruita i verdura amb aigua potable.',
            'Totes són correctes.',
        ],
        corrects: ['e']
    }

    constructor(private ff: FormBuilder,
                private cd: ChangeDetectorRef,
                private scormStoreService: ScormStoreService) { }

    ngOnInit() {
        this.form = this.ff.group({
            answerRadio: ''
        });
        if (this.scormStoreService.getAswersChecked(this.pregunta.id)) {
            this.answersChecked = this.scormStoreService.getAswersChecked(this.pregunta.id)
            this.form.get('answerRadio').patchValue(this.answersChecked[0],{emitEvent: false});
            this.checkAnswer();
        }
    }

    checkAnswer() {
        this.showMensaje = true;
        this.lockInput = true;
        this.answersChecked[0] = this.form.get('answerRadio').value;
        if (this.answersChecked[0] === this.pregunta.corrects[0]) {
            this.result = true;
        } else {
            this.result = false;
        }
        this.cd.detectChanges();
        this.elementosInputsRef = [];
        this.inputsRef.forEach(elem => {
            this.elementosInputsRef.push(elem);
        })
        this.elementosInputsRef.forEach(elem => {
            elem.nativeElement.disabled = true;
        });
        this.elementosLabelsRef = [];
        this.labelsRef.forEach(elem => {
            this.elementosLabelsRef.push(elem);
        })
        this.elementosLabelsRef.forEach(elem => {
            elem.nativeElement.classList.remove('incorrecta');
            elem.nativeElement.classList.remove('correcta');
        });
        let indexCorrecta = this.abcAnswers.indexOf(this.pregunta.corrects[0]);
        let indexMarcada = this.abcAnswers.indexOf(this.answersChecked[0]);
        if (indexCorrecta === indexMarcada) {
            this.elementosLabelsRef[indexMarcada].nativeElement.classList.add('correcta');    
        } else {
            this.elementosLabelsRef[indexMarcada].nativeElement.classList.add('incorrecta');     
        }
    }

    setAnswer() {
        if (this.form.get('answerRadio').value !== '') {
            this.checkAnswer();
            this.scormStoreService.setResults(this.pregunta.id, this.answersChecked, this.result);
        } else {
            this.toggleResumeModal()
        }
    }

    toggleResumeModal() {
        $("#modal-resume").toggleClass("show");
        $("#overlay").toggleClass("show");
        setTimeout(function(){
            $("#modal-resume").toggleClass("visible");
            $("#overlay").toggleClass("visible");
        }, 20);
    }

}
