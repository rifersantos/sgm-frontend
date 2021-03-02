import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { HomeComponent } from '../home/home.component';
const loginRoutes : Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ]
})
export class LoginRoutingModule { }
