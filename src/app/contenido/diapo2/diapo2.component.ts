import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo2',
  templateUrl: './diapo2.component.html',
  styleUrls: ['./diapo2.component.scss']
})
export class Diapo2Component implements OnInit {

    constructor() { }

    ngOnInit() {
              setTimeout(() => {
                  $("#slider-1").toggleClass("arriba")
                  $("#slider-2").toggleClass("out")
              }, 100);
              setTimeout(() => {
                  $("#slider-1").toggleClass("abajo")
                  $("#slider-2").toggleClass("arriba")
                  $("#slider-3").toggleClass("out")
              }, 4000);
              setTimeout(() => {
                  $("#slider-2").toggleClass("abajo")
                  $("#slider-3").toggleClass("arriba")
                  $("#slider-4").toggleClass("out")
              }, 8000);
              setTimeout(() => {
                  $("#slider-3").toggleClass("abajo")
                  $("#slider-4").toggleClass("arriba")
                  $("#slider-5").toggleClass("out")
              }, 12000);
              setTimeout(() => {
                  $("#slider-4").toggleClass("abajo")
                  $("#slider-5").toggleClass("arriba")
                  $("#slider-6").toggleClass("out")
              }, 16000);
              setTimeout(() => {
                  $("#slider-5").toggleClass("abajo")
                  $("#slider-6").toggleClass("arriba")
              }, 20000);
    }
}
