import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { RoleGuard } from "app/guards/role-guard.service";
import { GerenciamentoUsuarioListarComponent } from "./gerenciamento-usuario-listar.component";

const gerenciamentoUsuarioListarRoutes : Routes = [
    {
        path:'gerenciamento-usuario-listar',
        component:GerenciamentoUsuarioListarComponent,
        canActivate: [RoleGuard],
        data: { role: ['MASTER']}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(gerenciamentoUsuarioListarRoutes)
    ]

})
export class GerenciamentoUsuarioListarRoutingModule { }