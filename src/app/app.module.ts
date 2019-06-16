import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmFormComponent } from './components/film-form/film-form.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxSelectModule } from 'ngx-select-ex';
@NgModule({
  declarations: [
    AppComponent,
    FilmFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BsDropdownModule.forRoot(),
    NgxSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
