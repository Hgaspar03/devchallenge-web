import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component';
import { CountryFormComponent } from './views/country-form/country-form.component';
import { CountryListComponent } from './views/country-list/country-list.component';
import { ErrorComponent } from './views/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'countryForm',
    component: CountryFormComponent
  },
  {
    path: 'countryForm/:id',
    component: CountryFormComponent
  },
  {
    path: 'countryList',
    component: CountryListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
