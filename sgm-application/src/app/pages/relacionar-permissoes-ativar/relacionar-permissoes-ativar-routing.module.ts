import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { RoleGuard } from 'app/guards/role-guard.service';
import { RelacionarPermissoesAtivarComponent } from './relacionar-permissoes-ativar.component';
const relacionarPermissoesAtivarRoutes : Routes = [
    {
        path:'relacionar-permissoes-ativar',
        component:RelacionarPermissoesAtivarComponent,
        canActivate: [RoleGuard],
        data: {role: ['MASTER']}
    }];

@NgModule({
    imports: [
        RouterModule.forChild(relacionarPermissoesAtivarRoutes)
    ]
})
export class RelacionarPermissoesAtivarRoutingModule { }
