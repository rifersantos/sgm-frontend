import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { ForbiddenComponent } from './forbidden.component';
const forbiddenRoutes : Routes = [
    {
        path:'forbidden',
        component:ForbiddenComponent
    }];

@NgModule({
    imports: [
        RouterModule.forChild(forbiddenRoutes)
    ]
})
export class ForbiddenRoutingModule { }
