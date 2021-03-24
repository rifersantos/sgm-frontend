import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { RoleGuard } from "app/guards/role-guard.service";
import { GerenciamentoUsuarioEditarComponent } from "./gerenciamento-usuario-editar.component";

const gerenciamentoUsuarioEditarRoutes : Routes = [
    {
        path:'gerenciamento-usuario-editar',
        component:GerenciamentoUsuarioEditarComponent,
        canActivate: [RoleGuard],
        data: { role: ['MASTER']}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(gerenciamentoUsuarioEditarRoutes)
    ]

})
export class GerenciamentoUsuarioEditarRoutingModule { }