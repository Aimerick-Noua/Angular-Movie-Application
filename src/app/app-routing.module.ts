import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ChildComponent } from './child/child.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path: 'details/:id', component: DetailsComponent, children: [
      { path: 'address', component: AddressComponent },
      { path: 'company', component: CompanyComponent },
      { path: '', redirectTo: 'address', pathMatch: 'full' }

    ]
  },
  { path: 'page/:id', component: ChildComponent },
  { path: 'page/1', component: ChildComponent },

  { path: '', redirectTo: 'page/1', pathMatch: 'full' },
  { path: '**', redirectTo: 'page/1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
