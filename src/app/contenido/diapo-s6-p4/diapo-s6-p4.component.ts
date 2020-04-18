import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo-s6-p4',
  templateUrl: './diapo-s6-p4.component.html',
  styleUrls: ['./diapo-s6-p4.component.scss']
})
export class DiapoS6P4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    selectItem(e) {
        e--
        $(".item").removeClass("selected");
        $(".item").eq(e).toggleClass("selected");
        $(".texto").removeClass("selected");
        $(".texto").eq(e).toggleClass("selected");
    }

}
