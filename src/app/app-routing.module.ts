import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterielsInfoComponent } from './MaterielsInfo/MaterielsInfo.component';
import { PackFormationComponent } from './PackFormation/PackFormation.component';
import { ReservComponent } from './reserv/reserv.component';
import { Reserv2Component } from './reserv2/reserv2.component';
import { Page1Component } from './page1/page1.component';
import { WelcomComponent } from './welcom/welcom.component';
import { Welcom2Component } from './welcom2/welcom2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeproduitComponent } from './listeproduit/listeproduit.component';
import { ServicedeSSIComponent } from './servicede-ssi/servicede-ssi.component';

const routes: Routes = [
  {path:'MaterielsInfo',component:MaterielsInfoComponent},
  {path:'PackFormation',component:PackFormationComponent},
  {path:'reserv',component:ReservComponent},
  {path:'reserv2',component:Reserv2Component},
  {path:'page1',component:Page1Component},
  {path:'welcom',component:WelcomComponent},
  {path:'welcom2',component:Welcom2Component},
  {path:'navbar',component:NavbarComponent},
  {path:'listeproduit',component:ListeproduitComponent},
  {path: 'ServicedeSSI',component:ServicedeSSIComponent},





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
