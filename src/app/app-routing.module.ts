import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ByCapitalComponent } from "./country/pages/by-capital/by-capital.component";
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { GetCountryComponent } from './country/pages/get-country/get-country.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: ByRegionComponent,
  },
  {
    path: 'capital',
    component: ByCapitalComponent,
  },
  {
    path: 'country/:id',
    component: GetCountryComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }