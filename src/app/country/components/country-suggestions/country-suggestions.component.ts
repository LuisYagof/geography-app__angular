import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-suggestions',
  templateUrl: './country-suggestions.component.html',
  styles: [
    `
      a {
        color: #1e6a55;
      }
    `
  ]
})
export class CountrySuggestionsComponent implements OnChanges {
  suggestedCountries: Country[] = [];

  @Input() term: string = '';
  @Input() parent: string = '';

  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onFlagChange: EventEmitter<boolean> = new EventEmitter();

  searchCountry() {
    this.onSearch.emit(this.term)
    this.onFlagChange.emit(false)
  }

  constructor(private countryService: CountryService) { }

  ngOnChanges() {

    if (this.parent === "by-capital") {
      this.countryService.searchCapital(this.term)
        .subscribe(
          countries => this.suggestedCountries = countries.splice(0, 5),
          err => this.suggestedCountries = []
        )

    } else {
      this.countryService.searchCountry(this.term)
        .subscribe(
          countries => this.suggestedCountries = countries.splice(0, 5),
          err => this.suggestedCountries = []
        )
    }
  }
}
