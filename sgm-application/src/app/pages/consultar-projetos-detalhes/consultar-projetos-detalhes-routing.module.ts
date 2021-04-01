import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { RoleGuard } from "app/guards/role-guard.service";
import { ConsultarProjetosDetalhesComponent } from "./consultar-projetos-detalhes.component";

const consultarProjetosDetalhesRoutes : Routes = [
    {
        path:'consulta-projetos-detalhes',
        component:ConsultarProjetosDetalhesComponent,
        canActivate: [RoleGuard],
        data: { role: ['citizen', 'admin', 'employee']}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(consultarProjetosDetalhesRoutes)
    ]

})
export class ConsultarProjetosDetalhesRoutingModule { }