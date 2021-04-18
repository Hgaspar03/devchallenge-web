import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICountry } from 'src/app/models/ICountry';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  listCountries: ICountry[] = [];

  constructor(private countryService: CountryService, private router: Router,) { }

  ngOnInit(): void {

    this.countryService.listCountries().subscribe(
      (countrys)=> this.listCountries = countrys

    )
  }

  add=  () => {
    this.router.navigateByUrl('/countryForm');
};

remove(id:number){

  this.countryService.removeCountry(id).subscribe(
  );
this.listCountries.forEach(c=>{
  if (c.id ===id) {
    this.listCountries.splice(this.listCountries.indexOf(c),1);
  }
})
  this.router.navigateByUrl('/countryList');
};

edit(id:number){

  this.router.navigateByUrl('/countryForm/'+id);
};

}
