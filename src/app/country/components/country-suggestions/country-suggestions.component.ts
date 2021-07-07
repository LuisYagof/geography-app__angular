// import { Component, Input } from '@angular/core';
// import { Country } from '../../interfaces/country.interface';
// import { CountryService } from '../../services/country.service';

// @Component({
//   selector: 'app-country-suggestions',
//   templateUrl: './country-suggestions.component.html',
//   styles: [
//   ]
// })
// export class CountrySuggestionsComponent {
//   suggestedCountries: Country[] = []

//   @Input() term: string = ''

//   constructor(private countryService: CountryService) { }

//   searchCountry(term: string) {
//     this.countryService.searchCapital(term)
//   }

//   suggestions(term: string) {
//     this.term = term.trim();

//     this.countryService.searchCountry(term)
//       .subscribe(
//         countries => this.suggestedCountries = countries.splice(0, 5),
//         err => this.suggestedCountries = []
//       )
//   }

// }
