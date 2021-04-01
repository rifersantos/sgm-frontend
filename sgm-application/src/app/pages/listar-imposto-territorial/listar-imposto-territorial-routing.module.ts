import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { RoleGuard } from 'app/guards/role-guard.service';
import { ListarImpostoTerritorialComponent } from './listar-imposto-territorial.component';
const listarImpostoTerritorialRoutes : Routes = [
    {
        path:'listar-imposto-territorial',
        component:ListarImpostoTerritorialComponent,
        canActivate: [RoleGuard],
        data: { role: ['citizen', 'admin']}
    }];

@NgModule({
    imports: [
        RouterModule.forChild(listarImpostoTerritorialRoutes)
    ]
})
export class ListarImpostoTerritorialRoutingModule { }
