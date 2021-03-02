import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { RoleGuard } from 'app/guards/role-guard.service';
import { RelacionarPermissoesBuscarComponent } from './relacionar-permissoes-buscar.component';
const relacionarPermissoesBuscarRoutes : Routes = [
    {
        path:'relacionar-permissoes-buscar',
        component:RelacionarPermissoesBuscarComponent,
        canActivate: [RoleGuard],
        data: {role: ['ROLE_MASTER']}
    }];

@NgModule({
    imports: [
        RouterModule.forChild(relacionarPermissoesBuscarRoutes)
    ]
})
export class RelacionarPermissoesBuscarRoutingModule { }
