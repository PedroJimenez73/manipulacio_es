import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo13',
  templateUrl: './diapo13.component.html',
  styleUrls: ['./diapo13.component.scss']
})
export class Diapo13Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    flip(e) {
        e--
        $(".flip-card").eq(e).toggleClass('turn');
    }

}
