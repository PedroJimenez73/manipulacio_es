import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo-s6-p3',
  templateUrl: './diapo-s6-p3.component.html',
  styleUrls: ['./diapo-s6-p3.component.scss']
})

export class DiapoS6P3Component implements OnInit {

    anterior = ""

    constructor() { }

    ngOnInit() {

    }

    acordeon(id){
        let content=$(id+' .content');

        if((this.anterior!=id) && (this.anterior!="")&& ($(this.anterior+" .content").css("display"))!="none") {
            $(this.anterior+" .content").slideToggle(500);      
            $(this.anterior+" .mas").toggleClass('mostrada')     
            $(this.anterior+" .menos").toggleClass('mostrada')     
            $(this.anterior).toggleClass('borde')     
        }

        $(content).slideToggle(500);
        $(id+" .menos").toggleClass('mostrada');    
        $(id+" .mas").toggleClass('mostrada');
        $(id).toggleClass('borde');     
        this.anterior=id;
    }  

}
