import { Component, Output } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
      a {
        color: #1e6a55;
      }
    `
  ]
})
export class ByCountryComponent {

  term: string = '';
  errorFlag: boolean = false;
  countries: Country[] = []
  suggestedCountries: Country[] = []
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) { }

  searchCountry(term: string) {
    this.showSuggestions = false;
    this.errorFlag = false;
    this.term = term;

    this.countryService.searchCountry(this.term)
      .subscribe((countries: Country[]) => {
        this.countries = countries;
      },
        err => {
          this.errorFlag = true;
          this.countries = [];
        }
      )
  }

  suggestions(term: string) {
    this.showSuggestions = true;
    this.errorFlag = false;
    this.term = term.trim();

    this.countryService.searchCountry(term)
      .subscribe(
        countries => this.suggestedCountries = countries.splice(0, 5),
        err => this.suggestedCountries = []
      )
  }

}
