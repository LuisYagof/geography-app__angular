import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  term: string = '';
  errorFlag: boolean = false;
  countries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) { }

  searchCountry(term: string) {
    this.errorFlag = false;
    this.term = term;

    this.countryService.searchCapital(this.term)
      .subscribe((countries: Country[]) => {
        this.countries = countries;
      },
        err => {
          this.errorFlag = true;
          this.countries = [];
        }
      )
  }

  suggestionFlagHandler(flag: boolean) {
    this.showSuggestions = flag
  }

  suggestions(term: string) {
    this.showSuggestions = true;
    this.errorFlag = false;
    this.term = term.trim();
  }

}
