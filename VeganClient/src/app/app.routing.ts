import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VegansComponent } from './vegans/vegans.component';
import {VeganRegFormComponent} from './vegan-reg-form/vegan-reg-form.component';


export const appRoute: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'vegans',
        component: VegansComponent
    },
    {
        path: 'form',
        component: VeganRegFormComponent
    }
];
