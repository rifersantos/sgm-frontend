import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { ListarImpostoTerritorialComponent } from './listar-imposto-territorial.component';
const listarImpostoTerritorialRoutes : Routes = [
    {
        path:'listar-imposto-territorial',
        component:ListarImpostoTerritorialComponent
    }];

@NgModule({
    imports: [
        RouterModule.forChild(listarImpostoTerritorialRoutes)
    ]
})
export class ListarImpostoTerritorialRoutingModule { }
