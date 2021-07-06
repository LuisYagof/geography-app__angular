import { Component, Output } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: []
})
export class ByCountryComponent {

  term: string = '';
  errorFlag: boolean = false;
  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  searchCountry(term: string) {
    this.errorFlag = false;
    this.term = term;
    console.log(this.term);

    this.countryService.searchCountry(this.term)
      .subscribe((countries: Country[]) => {
        console.log(countries);
        this.countries = countries
      },
        err => {
          this.errorFlag = true;
          this.countries = [];
        }
      )
  }

  suggestions(term:string) {
    this.errorFlag = false
    // TODO: crear sugerencias

  }

}
