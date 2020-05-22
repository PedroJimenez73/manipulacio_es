import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

declare var $: any;

@Component({
  selector: 'app-diapo-s8-p13',
  templateUrl: './diapo-s8-p13.component.html',
  styleUrls: ['./diapo-s8-p13.component.scss']
})
export class DiapoS8P13Component implements OnInit {

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
        id: '16',
        question: 'Cal rentar-se les mans abans de:',
        answers: [
            'anar al wàter',
            'inici de la jornada laboral',
            'contacte amb escombraries',
            'mocar-se, tocar mocador',
            'manipular aliments crus',
            'manipulació d’aliments cuits'
        ],
        corrects: ['','b','','','e','f']
    }

    constructor(private ff: FormBuilder,
                private cd: ChangeDetectorRef,
                private scormStoreService: ScormStoreService) { }

    ngOnInit() {
        this.form = this.ff.group({
            answers: new FormArray([])
        });
        this.pregunta.answers.forEach(elem => {
            const control = new FormControl();
            (this.form.controls.answers as FormArray).push(control);
        });
        if (this.scormStoreService.getAswersChecked(this.pregunta.id)) {
            this.answersChecked = this.scormStoreService.getAswersChecked(this.pregunta.id);
            (this.form.get("answers") as FormArray).patchValue(this.answersChecked);
            this.checkAnswer();
        }
    }

    checkAnswer() {
        this.answersChecked = [];
        this.form.value.answers.forEach((input,i) => {
            if(input){
                this.answersChecked.push(this.abcAnswers[i]);
            } else {
                this.answersChecked.push('');
            }
        });
        if (String(this.answersChecked) === String(this.pregunta.corrects)) {
            this.result = true;
        } else {
            this.result = false;
        }
        this.showMensaje = true;
        this.lockInput = true;
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
        this.elementosLabelsRef.forEach((elem, i) => {
          if (this.pregunta.corrects[i]) {
            elem.nativeElement.classList.add('correcta');
          } else if (this.pregunta.corrects[i] === '' && this.answersChecked[i] !== '') {
            elem.nativeElement.classList.add('incorrecta');
          }
        });
    }

    setAnswer() {
        if (String(this.form.value.answers) !== String(["", "", "", "", "", "", "", "", "", ""])) {
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
