import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry } from '../models/ICountry';
import { Observable } from 'rxjs';
import { Component, OnInit, isDevMode } from '@angular/core';
import { environment } from '../../environments/environment';




const apiHost: string = environment.url;
@Injectable({
  providedIn: 'root'
})
export class CountryService {





  constructor(private http: HttpClient) { }


  listCountries() {

 

    return this.http.get<ICountry[]>(apiHost+'/all');
  }

  public saveCountry(country: ICountry) {

    if (country.id) {
      return this.http.put(apiHost, country);
    }

    return this.http.post(apiHost, country);
  }

  findCountryById(id: number): Observable<ICountry> {
    return this.http.get<ICountry>(
      apiHost + id  );
  }

  public removeCountry(id: number) {

    return   this.http.delete<ICountry>(apiHost+ id);

  

  }

}
