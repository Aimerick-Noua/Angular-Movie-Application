import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AgePipe } from './age.pipe';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component'
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { AddressComponent } from './address/address.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,  
    ChildComponent,
    AgePipe,
    DetailsComponent,
    CompanyComponent,
    AddressComponent,
    TimeFormatPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
