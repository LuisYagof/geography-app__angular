import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-get-country',
  templateUrl: './get-country.component.html',
  styles: [
  ]
})
export class GetCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(params => {
          return this.countryService.searchCountryByCode(params.id)
        }),
        tap(console.log)
      )
      .subscribe(country => {
        this.country = country;
      })

    // --------------> forma 1, sin usar SwitchMap:
    // this.activatedRoute.params
    //   .subscribe(params => {
    //     this.countryService.searchCountryByCode(params.id)
    //       .subscribe(country => {
    //         this.country = country;
    //       })
    //   })

  }

}
