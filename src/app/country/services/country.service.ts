import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population')
  }

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url, { params: this.httpParams })
    // .pipe(
    //   catchError(err => of([]))
    // )
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url, { params: this.httpParams })
  }

  searchCountryByCode(id: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/alpha/${id}`)
  }

  searchRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`, { params: this.httpParams })
  }

}
