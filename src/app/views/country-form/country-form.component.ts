import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ICountry } from 'src/app/models/ICountry';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  public countryForm: FormGroup = new FormGroup({
    name: new FormControl(),
    capital: new FormControl(),
    region: new FormControl(),
    subRegion: new FormControl(),
    area: new FormControl(),
  })

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {


    let id = this.activeRoute.snapshot.params.id;
  

 if (id) {
     this.countryService.findCountryById(id)
      .subscribe(
       res=>{
          let  country =res;
    
         this.groupFormWith(country);
        },
        (err) => {
          this.fatalMsg = err.message;
         this.groupEmptyForm();
        }
      );
    }else{
     this.groupEmptyForm();
   }

  }

  infoMsg: string = '';
  fatalMsg: string = '';

  create(): void {
    this.countryService.saveCountry(
      this.countryForm.value)
     .subscribe(res => {
        this.infoMsg = 'País Cadastrado com Sucesso';
        console.log('Sucesso' +   this.countryForm.value);
       this.countryForm.reset();
     this.router.navigate(['countryList']);
     },
       err => {
      this.fatalMsg = "Erro ao Cadastrar País: " + err;
       }
   )
  }

  private groupFormWith(country: ICountry): void {
    this.countryForm = this.fb.group({
      id: [country.id],
      name: [country.name, [Validators.required]],
      capital: [country.capital, [Validators.required]],
      region: [country.region, [Validators.required]],
      subRegion: [country.subRegion, [Validators.required]],
      area: [country.area, [Validators.required]],

    });
  }

  private groupEmptyForm() {
    this.countryForm = this.fb.group({
      id: [""],
      name: ["", [Validators.required]],
      capital: ["", [Validators.required]],
      region: ["", [Validators.required]],
      subRegion: ["", [Validators.required]],
      area: ["", [Validators.required]],
    });
  }
  }


