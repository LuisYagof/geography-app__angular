import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { GetCountryComponent } from './pages/get-country/get-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CountrySuggestionsComponent } from './components/country-suggestions/country-suggestions.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    GetCountryComponent,
    CountryTableComponent,
    SearchInputComponent,
    CountrySuggestionsComponent
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    GetCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
