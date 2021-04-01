import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { RoleGuard } from 'app/guards/role-guard.service';
import { ImpostoTerritorialComponent } from './imposto-territorial.component';
const impostoTerritorialRoutes : Routes = [
    {
        path:'imposto-territorial',
        component:ImpostoTerritorialComponent,
        canActivate: [RoleGuard],
        data: { role: ['citizen', 'admin']}
    }];

@NgModule({
    imports: [
        RouterModule.forChild(impostoTerritorialRoutes)
    ]
})
export class ImpostoTerritorialRoutingModule { }
