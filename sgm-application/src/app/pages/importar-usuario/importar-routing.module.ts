import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { ImportarUsuarioComponent } from './importar-usuario.component';
import { RoleGuard } from 'app/guards/role-guard.service';
const importarRoutes : Routes = [
    {
        path:'importar',
        component:ImportarUsuarioComponent,
        canActivate: [RoleGuard],
        data: {role: ['MASTER']}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(importarRoutes)
    ]
})
export class ImportarRoutingModule { }
