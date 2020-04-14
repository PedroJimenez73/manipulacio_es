import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-diapo47',
  templateUrl: './diapo47.component.html',
  styleUrls: ['./diapo47.component.scss']
})
export class Diapo47Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    showTab(e) {
        for (let i=0; i < 3; i++) {
            if(e === i) {
                $(".content-tabs div").eq(i).addClass("show");
                $(".content-tabs div").eq(i).addClass("visible");
                $(".tabs div").eq(i).addClass("check");
            } else {
                $(".content-tabs div").eq(i).removeClass("show");
                $(".content-tabs div").eq(i).removeClass("visible");
                $(".tabs div").eq(i).removeClass("check");
            }
        }
    }

}
