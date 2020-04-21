import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comunes/header/header.component';
import { Diapo1Component } from './contenido/diapo1/diapo1.component';
import { LoadDirective } from './directivas/load.directive';
import { PantallaComponent } from './pantalla/pantalla.component';
import { FooterComponent } from './comunes/footer/footer.component';
import { Diapo2Component } from './contenido/diapo2/diapo2.component';
import { PortadaComponent } from './contenido/portada/portada.component';
import { RelojPipe } from './reloj.pipe';
import { Diapo3Component } from './contenido/diapo3/diapo3.component';
import { Diapo4Component } from './contenido/diapo4/diapo4.component';
import { Diapo5Component } from './contenido/diapo5/diapo5.component';
import { Diapo6Component } from './contenido/diapo6/diapo6.component';
import { Diapo7Component } from './contenido/diapo7/diapo7.component';
import { Diapo8Component } from './contenido/diapo8/diapo8.component';
import { Diapo9Component } from './contenido/diapo9/diapo9.component';
import { Diapo10Component } from './contenido/diapo10/diapo10.component';
import { Diapo11Component } from './contenido/diapo11/diapo11.component';
import { Diapo12Component } from './contenido/diapo12/diapo12.component';
import { Diapo13Component } from './contenido/diapo13/diapo13.component';
import { Diapo14Component } from './contenido/diapo14/diapo14.component';
import { Diapo15Component } from './contenido/diapo15/diapo15.component';
import { Diapo16Component } from './contenido/diapo16/diapo16.component';
import { Diapo17Component } from './contenido/diapo17/diapo17.component';
import { Diapo18Component } from './contenido/diapo18/diapo18.component';
import { Diapo19Component } from './contenido/diapo19/diapo19.component';
import { Diapo20Component } from './contenido/diapo20/diapo20.component';
import { Diapo21Component } from './contenido/diapo21/diapo21.component';
import { Diapo22Component } from './contenido/diapo22/diapo22.component';
import { Diapo23Component } from './contenido/diapo23/diapo23.component';
import { Diapo24Component } from './contenido/diapo24/diapo24.component';
import { Diapo25Component } from './contenido/diapo25/diapo25.component';
import { Diapo26Component } from './contenido/diapo26/diapo26.component';
import { Diapo27Component } from './contenido/diapo27/diapo27.component';
import { Diapo28Component } from './contenido/diapo28/diapo28.component';
import { Diapo29Component } from './contenido/diapo29/diapo29.component';
import { Diapo30Component } from './contenido/diapo30/diapo30.component';
import { Diapo31Component } from './contenido/diapo31/diapo31.component';
import { Diapo33Component } from './contenido/diapo33/diapo33.component';
import { Diapo34Component } from './contenido/diapo34/diapo34.component';
import { Diapo36Component } from './contenido/diapo36/diapo36.component';
import { Diapo37Component } from './contenido/diapo37/diapo37.component';
import { Diapo38Component } from './contenido/diapo38/diapo38.component';
import { Diapo39Component } from './contenido/diapo39/diapo39.component';
import { Diapo40Component } from './contenido/diapo40/diapo40.component';
import { Diapo41Component } from './contenido/diapo41/diapo41.component';
import { Diapo42Component } from './contenido/diapo42/diapo42.component';
import { Diapo43Component } from './contenido/diapo43/diapo43.component';
import { Diapo44Component } from './contenido/diapo44/diapo44.component';
import { Diapo45Component } from './contenido/diapo45/diapo45.component';
import { Diapo46Component } from './contenido/diapo46/diapo46.component';
import { Diapo47Component } from './contenido/diapo47/diapo47.component';
import { Diapo48Component } from './contenido/diapo48/diapo48.component';
import { Diapo49Component } from './contenido/diapo49/diapo49.component';
import { Diapo50Component } from './contenido/diapo50/diapo50.component';
import { Diapo51Component } from './contenido/diapo51/diapo51.component';
import { Diapo52Component } from './contenido/diapo52/diapo52.component';
import { Diapo53Component } from './contenido/diapo53/diapo53.component';
import { Diapo54Component } from './contenido/diapo54/diapo54.component';
import { Diapo55Component } from './contenido/diapo55/diapo55.component';
import { Diapo56Component } from './contenido/diapo56/diapo56.component';
import { Diapo57Component } from './contenido/diapo57/diapo57.component';
import { Diapo58Component } from './contenido/diapo58/diapo58.component';
import { Diapo59Component } from './contenido/diapo59/diapo59.component';
import { Diapo60Component } from './contenido/diapo60/diapo60.component';
import { Diapo27bisComponent } from './contenido/diapo27bis/diapo27bis.component';
import { DiapoS6P1Component } from './contenido/diapo-s6-p1/diapo-s6-p1.component';
import { DiapoS6P2Component } from './contenido/diapo-s6-p2/diapo-s6-p2.component';
import { DiapoS6P3Component } from './contenido/diapo-s6-p3/diapo-s6-p3.component';
import { DiapoS6P4Component } from './contenido/diapo-s6-p4/diapo-s6-p4.component';
import { DiapoS6P5Component } from './contenido/diapo-s6-p5/diapo-s6-p5.component';
import { DiapoS6P6Component } from './contenido/diapo-s6-p6/diapo-s6-p6.component';
import { DiapoS6P7Component } from './contenido/diapo-s6-p7/diapo-s6-p7.component';
import { ScrollDirective } from './directivas/scroll.directive';
import { DiapoS7P1Component } from './contenido/diapo-s7-p1/diapo-s7-p1.component';
import { DiapoS7P2Component } from './contenido/diapo-s7-p2/diapo-s7-p2.component';
import { DiapoS7P3Component } from './contenido/diapo-s7-p3/diapo-s7-p3.component';
import { DiapoS7P4Component } from './contenido/diapo-s7-p4/diapo-s7-p4.component';
import { DiapoS7P5Component } from './contenido/diapo-s7-p5/diapo-s7-p5.component';
import { DiapoS7P6Component } from './contenido/diapo-s7-p6/diapo-s7-p6.component';
import { DiapoS7P7Component } from './contenido/diapo-s7-p7/diapo-s7-p7.component';
import { DiapoS7P8Component } from './contenido/diapo-s7-p8/diapo-s7-p8.component';
import { DiapoS7P9Component } from './contenido/diapo-s7-p9/diapo-s7-p9.component';
import { DiapoS7P10Component } from './contenido/diapo-s7-p10/diapo-s7-p10.component';
import { DiapoS7P11Component } from './contenido/diapo-s7-p11/diapo-s7-p11.component';
import { DiapoS8P1Component } from './contenido/diapo-s8-p1/diapo-s8-p1.component';
import { DiapoS8P2Component } from './contenido/diapo-s8-p2/diapo-s8-p2.component';
import { DiapoS8P3Component } from './contenido/diapo-s8-p3/diapo-s8-p3.component';
import { DiapoS8P4Component } from './contenido/diapo-s8-p4/diapo-s8-p4.component';
import { DiapoS8P5Component } from './contenido/diapo-s8-p5/diapo-s8-p5.component';
import { DiapoS8P6Component } from './contenido/diapo-s8-p6/diapo-s8-p6.component';
import { DiapoS8P7Component } from './contenido/diapo-s8-p7/diapo-s8-p7.component';
import { DiapoS8P8Component } from './contenido/diapo-s8-p8/diapo-s8-p8.component';
import { DiapoS8P9Component } from './contenido/diapo-s8-p9/diapo-s8-p9.component';
import { DiapoS8P10Component } from './contenido/diapo-s8-p10/diapo-s8-p10.component';
import { DiapoS8P11Component } from './contenido/diapo-s8-p11/diapo-s8-p11.component';
import { DiapoS8P12Component } from './contenido/diapo-s8-p12/diapo-s8-p12.component';
import { DiapoS8P13Component } from './contenido/diapo-s8-p13/diapo-s8-p13.component';
import { DiapoS8P14Component } from './contenido/diapo-s8-p14/diapo-s8-p14.component';
import { DiapoS9P1Component } from './contenido/diapo-s9-p1/diapo-s9-p1.component';
import { DiapoS9P2Component } from './contenido/diapo-s9-p2/diapo-s9-p2.component';
import { DiapoS9P3Component } from './contenido/diapo-s9-p3/diapo-s9-p3.component';
import { DiapoS9P4Component } from './contenido/diapo-s9-p4/diapo-s9-p4.component';
import { DiapoS9P5Component } from './contenido/diapo-s9-p5/diapo-s9-p5.component';
import { DiapoS9P6Component } from './contenido/diapo-s9-p6/diapo-s9-p6.component';
import { DiapoS9P7Component } from './contenido/diapo-s9-p7/diapo-s9-p7.component';
import { DiapoS9P8Component } from './contenido/diapo-s9-p8/diapo-s9-p8.component';
import { DiapoS9P9Component } from './contenido/diapo-s9-p9/diapo-s9-p9.component';
import { DiapoS9P10Component } from './contenido/diapo-s9-p10/diapo-s9-p10.component';
import { DiapoS9P11Component } from './contenido/diapo-s9-p11/diapo-s9-p11.component';
import { DiapoS9P12Component } from './contenido/diapo-s9-p12/diapo-s9-p12.component';
import { DiapoS9P13Component } from './contenido/diapo-s9-p13/diapo-s9-p13.component';
import { DiapoS9P14Component } from './contenido/diapo-s9-p14/diapo-s9-p14.component';
import { DiapoS10P1Component } from './contenido/diapo-s10-p1/diapo-s10-p1.component';
import { DiapoS10P2Component } from './contenido/diapo-s10-p2/diapo-s10-p2.component';
import { DiapoResEvalComponent } from './contenido/diapo-res-eval/diapo-res-eval.component';
import { Diapo26bisComponent } from './contenido/diapo26bis/diapo26bis.component';
import { Diapo32Component } from './contenido/diapo32/diapo32.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Diapo1Component,
    LoadDirective,
    PantallaComponent,
    FooterComponent,
    Diapo2Component,
    PortadaComponent,
    RelojPipe,
    Diapo3Component,
    Diapo4Component,
    Diapo5Component,
    Diapo6Component,
    Diapo7Component,
    Diapo8Component,
    Diapo9Component,
    Diapo10Component,
    Diapo11Component,
    Diapo12Component,
    Diapo13Component,
    Diapo14Component,
    Diapo15Component,
    Diapo16Component,
    Diapo17Component,
    Diapo18Component,
    Diapo19Component,
    Diapo20Component,
    Diapo21Component,
    Diapo22Component,
    Diapo23Component,
    Diapo24Component,
    Diapo25Component,
    Diapo26Component,
    Diapo27Component,
    Diapo28Component,
    Diapo29Component,
    Diapo30Component,
    Diapo31Component,
    Diapo33Component,
    Diapo34Component,
    Diapo36Component,
    Diapo37Component,
    Diapo38Component,
    Diapo39Component,
    Diapo40Component,
    Diapo41Component,
    Diapo42Component,
    Diapo43Component,
    Diapo44Component,
    Diapo45Component,
    Diapo46Component,
    Diapo47Component,
    Diapo48Component,
    Diapo49Component,
    Diapo50Component,
    Diapo51Component,
    Diapo52Component,
    Diapo53Component,
    Diapo54Component,
    Diapo55Component,
    Diapo56Component,
    Diapo57Component,
    Diapo58Component,
    Diapo59Component,
    Diapo60Component,
    Diapo27bisComponent,
    DiapoS6P1Component,
    DiapoS6P2Component,
    DiapoS6P3Component,
    DiapoS6P4Component,
    DiapoS6P5Component,
    DiapoS6P6Component,
    DiapoS6P7Component,
    ScrollDirective,
    DiapoS7P1Component,
    DiapoS7P2Component,
    DiapoS7P3Component,
    DiapoS7P4Component,
    DiapoS7P5Component,
    DiapoS7P6Component,
    DiapoS7P7Component,
    DiapoS7P8Component,
    DiapoS7P9Component,
    DiapoS7P10Component,
    DiapoS7P11Component,
    DiapoS8P1Component,
    DiapoS8P2Component,
    DiapoS8P3Component,
    DiapoS8P4Component,
    DiapoS8P5Component,
    DiapoS8P6Component,
    DiapoS8P7Component,
    DiapoS8P8Component,
    DiapoS8P9Component,
    DiapoS8P10Component,
    DiapoS8P11Component,
    DiapoS8P12Component,
    DiapoS8P13Component,
    DiapoS8P14Component,
    DiapoS9P1Component,
    DiapoS9P2Component,
    DiapoS9P3Component,
    DiapoS9P4Component,
    DiapoS9P5Component,
    DiapoS9P6Component,
    DiapoS9P7Component,
    DiapoS9P8Component,
    DiapoS9P9Component,
    DiapoS9P10Component,
    DiapoS9P11Component,
    DiapoS9P12Component,
    DiapoS9P13Component,
    DiapoS9P14Component,
    DiapoS10P1Component,
    DiapoS10P2Component,
    DiapoResEvalComponent,
    Diapo26bisComponent,
    Diapo32Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ 
    PortadaComponent, 
    Diapo1Component,
    Diapo2Component,
    Diapo3Component,
    Diapo4Component,
    Diapo5Component,
    Diapo6Component,
    Diapo7Component,
    Diapo8Component,
    Diapo9Component,
    Diapo10Component,
    Diapo11Component,
    Diapo12Component,
    Diapo13Component,
    Diapo14Component,
    Diapo15Component,
    Diapo16Component,
    Diapo17Component,
    Diapo18Component,
    Diapo19Component,
    Diapo20Component,
    Diapo21Component,
    Diapo22Component,
    Diapo23Component,
    Diapo24Component,
    Diapo25Component,
    Diapo26Component,
    Diapo26bisComponent,
    Diapo27Component,
    Diapo27bisComponent,
    Diapo28Component,
    Diapo29Component,
    Diapo30Component,
    Diapo31Component,
    Diapo32Component,
    Diapo33Component,
    Diapo34Component,
    Diapo36Component,
    Diapo37Component,
    Diapo38Component,
    Diapo39Component,
    Diapo40Component,
    Diapo41Component,
    Diapo42Component,
    Diapo43Component,
    Diapo44Component,
    Diapo45Component,
    Diapo46Component,
    Diapo47Component,
    Diapo48Component,
    Diapo49Component,
    Diapo50Component,
    Diapo51Component,
    Diapo52Component,
    Diapo53Component,
    Diapo54Component,
    Diapo55Component,
    Diapo56Component,
    Diapo57Component,
    Diapo58Component,
    Diapo59Component,
    Diapo60Component,
    DiapoS6P1Component,
    DiapoS6P2Component,
    DiapoS6P3Component,
    DiapoS6P4Component,
    DiapoS6P5Component,
    DiapoS6P6Component,
    DiapoS6P7Component,
    DiapoS7P1Component,
    DiapoS7P2Component,
    DiapoS7P3Component,
    DiapoS7P4Component,
    DiapoS7P5Component,
    DiapoS7P6Component,
    DiapoS7P7Component,
    DiapoS7P8Component,
    DiapoS7P9Component,
    DiapoS7P10Component,
    DiapoS7P11Component,
    DiapoS8P1Component,
    DiapoS8P2Component,
    DiapoS8P3Component,
    DiapoS8P4Component,
    DiapoS8P5Component,
    DiapoS8P6Component,
    DiapoS8P7Component,
    DiapoS8P8Component,
    DiapoS8P9Component,
    DiapoS8P10Component,
    DiapoS8P11Component,
    DiapoS8P12Component,
    DiapoS8P13Component,
    DiapoS8P14Component,
    DiapoS9P1Component,
    DiapoS9P2Component,
    DiapoS9P3Component,
    DiapoS9P4Component,
    DiapoS9P5Component,
    DiapoS9P6Component,
    DiapoS9P7Component,
    DiapoS9P8Component,
    DiapoS9P9Component,
    DiapoS9P10Component,
    DiapoS9P11Component,
    DiapoS9P12Component,
    DiapoS9P13Component,
    DiapoS9P14Component,
    DiapoS10P1Component,
    DiapoS10P2Component,
    DiapoResEvalComponent,
  ]
})
export class AppModule { }
