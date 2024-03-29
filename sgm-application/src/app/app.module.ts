
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxMaskModule } from 'ngx-mask'
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './pages/login/login-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { LoaderComponent } from './core/loader/loader.component';
import { LoaderService } from './core/loader/loader.service';
import { MatProgressBarModule, MatAutocompleteModule, MatFormFieldModule, MatOptionModule, MatInputModule, MatCheckbox, MatCheckboxModule, MatSelectModule, MatTable, MatTableModule, MatTableDataSource, MatSort, MatSortModule } from '@angular/material';
import { ImportarUsuarioComponent } from './pages/importar-usuario/importar-usuario.component';
import { ImportarRoutingModule } from './pages/importar-usuario/importar-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { RoleComponent } from './components/role/role.component';
import { HttpClientModule } from '@angular/common/http';
import { RoleGuard } from './guards/role-guard.service';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { ForbiddenRoutingModule } from './pages/forbidden/forbidden-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { Roteador } from './core/data/roteador-provider';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GerenciamentoUsuarioEditarComponent } from './pages/gerenciamento-usuario-editar/gerenciamento-usuario-editar.component';
import { GerenciamentoUsuarioEditarRoutingModule } from './pages/gerenciamento-usuario-editar/gerenciamento-usuario-editar-routing.module';
import { ListarImpostoTerritorialComponent } from './pages/listar-imposto-territorial/listar-imposto-territorial.component';
import { PrimeiroAcessoComponent } from './pages/primeiro-acesso/primeiro-acesso.component';
import { PrimeiroAcessoRoutingModule } from './pages/primeiro-acesso/primeiro-acesso-routing.module';
import { ListarImpostoTerritorialRoutingModule } from './pages/listar-imposto-territorial/listar-imposto-territorial-routing.module';
import { ImpostoTerritorialComponent } from './pages/imposto-territorial/imposto-territorial.component';
import { ImpostoTerritorialRoutingModule } from './pages/imposto-territorial/imposto-territorial-routing.module';
import { ConsultarProjetosListarComponent } from './pages/consultar-projetos-listar/consultar-projetos-listar.component';
import { ConsultarProjetosDetalhesComponent } from './pages/consultar-projetos-detalhes/consultar-projetos-detalhes.component';
import { ConsultarProjetosListarRoutingModule } from './pages/consultar-projetos-listar/consultar-projetos-listar-routing.module';
import { ConsultarProjetosDetalhesRoutingModule } from './pages/consultar-projetos-detalhes/consultar-projetos-detalhes-routing.module';


defineLocale('pt-br', ptBrLocale);//necessário para o datePicker
registerLocaleData(localePt, 'pt-BR');//necessário para o Date pipe
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MessageComponent,
    LoaderComponent,
    ImportarUsuarioComponent,
    MenuComponent,
    RoleComponent,
    ForbiddenComponent,
    GerenciamentoUsuarioEditarComponent,
    ListarImpostoTerritorialComponent,
    PrimeiroAcessoComponent,
    ImpostoTerritorialComponent,
    ConsultarProjetosListarComponent,
    ConsultarProjetosDetalhesComponent    
  ],
  exports: [
    LoaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    LoginRoutingModule,
    MatProgressBarModule,
    ImportarRoutingModule,
    NgxMaskModule.forRoot(),
    ForbiddenRoutingModule,
    GerenciamentoUsuarioEditarRoutingModule,
    PrimeiroAcessoRoutingModule,
    ListarImpostoTerritorialRoutingModule,
    ImpostoTerritorialRoutingModule,
    ConsultarProjetosListarRoutingModule,
    ConsultarProjetosDetalhesRoutingModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    LoaderService,
    RoleGuard,
    Roteador,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }