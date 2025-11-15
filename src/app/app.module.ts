import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackFormationComponent} from './PackFormation/PackFormation.component';
import { MaterielsInfoComponent } from './MaterielsInfo/MaterielsInfo.component';
import { ReservComponent } from './reserv/reserv.component';
import { Page1Component } from './page1/page1.component';
import { Reserv2Component } from './reserv2/reserv2.component';
import { WelcomComponent } from './welcom/welcom.component';
import { Welcom2Component } from './welcom2/welcom2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeproduitComponent } from './listeproduit/listeproduit.component';
import { HttpClientModule} from '@angular/common/http';
import { ServicedeSSIComponent } from './ServicedeSSI/ServicedeSSI.component';


@NgModule({
  declarations: [
    AppComponent,
    PackFormationComponent,
    MaterielsInfoComponent,
    ReservComponent,
    Page1Component,
    Reserv2Component,
    WelcomComponent,
    Welcom2Component,
    NavbarComponent,
    //NavbarComponent,
    ListeproduitComponent,
    ServicedeSSIComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class produit{}
export class User{}