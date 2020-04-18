import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo47',
  templateUrl: './diapo47.component.html',
  styleUrls: ['./diapo47.component.scss']
})
export class Diapo47Component implements OnInit {

    height;
    @ViewChildren('contentsRef') contentsRef: QueryList<ElementRef>;
    heightsRef = [];
    
    constructor(private cd: ChangeDetectorRef) { 

    }

    ngOnInit() {
        setTimeout(() => {
            this.setHeight();
        }, 300);
    }

    setHeight() {
        this.cd.detectChanges();
        this.contentsRef.forEach(elem => {
            this.heightsRef.push(elem.nativeElement.offsetHeight);
        })
        this.height = Math.max.apply(null, this.heightsRef) / this.heightsRef.length;
        $(".tab").eq(0).addClass("show");
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
