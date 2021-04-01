import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { RoleGuard } from "app/guards/role-guard.service";
import { ConsultarProjetosListarComponent } from "./consultar-projetos-listar.component";

const consultarProjetosListarRoutes : Routes = [
    {
        path:'consulta-projetos-listar',
        component:ConsultarProjetosListarComponent,
        canActivate: [RoleGuard],
        data: { role: ['citizen', 'admin', 'employee']}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(consultarProjetosListarRoutes)
    ]

})
export class ConsultarProjetosListarRoutingModule { }