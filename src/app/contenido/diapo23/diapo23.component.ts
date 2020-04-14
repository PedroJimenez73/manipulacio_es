import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo23',
  templateUrl: './diapo23.component.html',
  styleUrls: ['./diapo23.component.scss']
})
export class Diapo23Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    flip(e) {
        e--
        $(".flip-card").eq(e).toggleClass('turn');
    }

}
