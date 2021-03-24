import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
    {
        path:'',
        redirectTo :'/login',
        pathMatch:'full'
    },
    {
        path:'forbidden',
        redirectTo:'/forbidden',
        pathMatch:'full'
    },
    {
        path:'relacionar-permissoes-buscar',
        redirectTo:'relacionar-permissoes-buscar',
        pathMatch:'full'
    },
    {
        path:'relacionar-permissoes-ativar',
        redirectTo:'relacionar-permissoes-ativar',
        pathMatch:'full'
    },
    {
        path:'gerenciamento-usuario-listar',
        redirectTo:'gerenciamento-usuario-listar',
        pathMatch:'full'
    },
    {
        path:'gerenciamento-usuario-editar',
        redirectTo:'gerenciamento-usuario-editar',
        pathMatch:'full'
    },
    {
        path:'listar-imposto-territorial',
        redirectTo:'/listar-imposto-territorial',
        pathMatch:'full'
    },
    {
        path:'primeiro-acesso',
        redirectTo:'/primeiro-acesso',
        pathMatch:'full'
    },
    {
        path:'imposto-territorial',
        redirectTo:'/imposto-territorial',
        pathMatch:'full'
    },
    {
        path:'consulta-projetos-listar',
        redirectTo:'/consulta-projetos-listar',
        pathMatch:'full'
    },
    {
        path:'consulta-projetos-detalhes',
        redirectTo:'/consulta-projetos-detalhes',
        pathMatch:'full'
    }
];

@NgModule({
    imports :[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}