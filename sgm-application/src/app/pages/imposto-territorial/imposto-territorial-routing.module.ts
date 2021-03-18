import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { ImpostoTerritorialComponent } from './imposto-territorial.component';
const impostoTerritorialRoutes : Routes = [
    {
        path:'imposto-territorial',
        component:ImpostoTerritorialComponent
    }];

@NgModule({
    imports: [
        RouterModule.forChild(impostoTerritorialRoutes)
    ]
})
export class ImpostoTerritorialRoutingModule { }
