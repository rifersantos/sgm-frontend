import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { PrimeiroAcessoComponent } from './primeiro-acesso.component';
const primeiroAcessoRoutes : Routes = [
    {
        path:'primeiro-acesso',
        component:PrimeiroAcessoComponent
    }];

@NgModule({
    imports: [
        RouterModule.forChild(primeiroAcessoRoutes)
    ]
})
export class PrimeiroAcessoRoutingModule { }
