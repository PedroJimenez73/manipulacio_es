import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-diapo-s8-p4',
  templateUrl: './diapo-s8-p4.component.html',
  styleUrls: ['./diapo-s8-p4.component.scss']
})
export class DiapoS8P4Component implements OnInit {

   anterior = "";

    constructor() { }

    ngOnInit() {
    }

    acordeon(id){
        let content =$(id+' .content');
        // svg=$(id+' svg');
        console.log($(this.anterior+" .content").css("display"));

        // heightContent=($(content).height()+70)+'px';
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
        this.anterior = id;
    } 


}
