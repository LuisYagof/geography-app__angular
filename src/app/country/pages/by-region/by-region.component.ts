import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  getBtnClass(region: string): string {
    return region === this.activeRegion ? 'btn-secondary' : 'btn-outline-secondary';
  }

  activateRegion(region: string) {

    if (region === this.activeRegion) { return; }

    this.activeRegion = region
    this.countries = []

    this.countryService.searchRegion(this.activeRegion)
      .subscribe((countries: Country[]) => this.countries = countries);

  }

}

