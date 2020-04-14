import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo48',
  templateUrl: './diapo48.component.html',
  styleUrls: ['./diapo48.component.scss']
})
export class Diapo48Component implements OnInit {

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
