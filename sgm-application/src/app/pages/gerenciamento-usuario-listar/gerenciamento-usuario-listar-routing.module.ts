import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { RoleGuard } from "app/guards/role-guard.service";
import { GerenciamentoUsuarioListarComponent } from "./gerenciamento-usuario-listar.component";

const gerenciamentoUsuarioListarRoutes : Routes = [
    {
        path:'gerenciamento-usuario-listar',
        component:GerenciamentoUsuarioListarComponent,
        canActivate: [RoleGuard],
        data: { role: ['ROLE_MASTER', 'ROLE_MASTER_AUXILIAR', 'ROLE_GESTOR', 'ROLE_GESTOR_AUXILIAR']}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(gerenciamentoUsuarioListarRoutes)
    ]

})
export class GerenciamentoUsuarioListarRoutingModule { }