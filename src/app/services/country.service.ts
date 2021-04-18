import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry } from '../models/ICountry';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CountryService {


  constructor(private http: HttpClient) { }


  listCountries() {
    return this.http.get<ICountry[]>('https://hgaspar-country-api.herokuapp.com/country/all');
  }

  public saveCountry(country: ICountry) {

    if (country.id) {
      return this.http.put('https://hgaspar-country-api.herokuapp.com/country', country);
    }

    return this.http.post('https://hgaspar-country-api.herokuapp.com/country', country);
  }

  findCountryById(id: number): Observable<ICountry> {
    return this.http.get<ICountry>(
     'https://hgaspar-country-api.herokuapp.com/country/' + id  );
  }

  public removeCountry(id: number) {

    return   this.http.delete<ICountry>('https://hgaspar-country-api.herokuapp.com/country/delete/'+ id);

  

  }

}
