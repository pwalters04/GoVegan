import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {appRoute} from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { VegansComponent } from './vegans/vegans.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VeganRegFormComponent } from './vegan-reg-form/vegan-reg-form.component';


@NgModule({
  declarations: [
    AppComponent,
    VegansComponent,
    LoginComponent,
    HomeComponent,
    VeganRegFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
