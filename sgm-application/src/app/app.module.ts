
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
import { RelacionarPermissoesAtivarComponent } from './pages/relacionar-permissoes-ativar/relacionar-permissoes-ativar.component';
import { RelacionarPermissoesBuscarComponent } from './pages/relacionar-permissoes-buscar/relacionar-permissoes-buscar.component';
import { RelacionarPermissoesBuscarRoutingModule } from './pages/relacionar-permissoes-buscar/relacionar-permissoes-buscar-routing.module';
import { RelacionarPermissoesAtivarRoutingModule } from './pages/relacionar-permissoes-ativar/relacionar-permissoes-ativar-routing.module';
import { GerenciamentoUsuarioEditarComponent } from './pages/gerenciamento-usuario-editar/gerenciamento-usuario-editar.component';
import { GerenciamentoUsuarioListarComponent } from './pages/gerenciamento-usuario-listar/gerenciamento-usuario-listar.component';
import { GerenciamentoUsuarioListarRoutingModule } from './pages/gerenciamento-usuario-listar/gerenciamento-usuario-listar-routing.module';
import { GerenciamentoUsuarioEditarRoutingModule } from './pages/gerenciamento-usuario-editar/gerenciamento-usuario-editar-routing.module';
import { ListarImpostoTerritorialComponent } from './pages/listar-imposto-territorial/listar-imposto-territorial.component';
import { PrimeiroAcessoComponent } from './pages/primeiro-acesso/primeiro-acesso.component';
import { PrimeiroAcessoRoutingModule } from './pages/primeiro-acesso/primeiro-acesso-routing.module';


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
    RelacionarPermissoesAtivarComponent,
    RelacionarPermissoesBuscarComponent,
    GerenciamentoUsuarioEditarComponent,
    GerenciamentoUsuarioListarComponent,
    ListarImpostoTerritorialComponent,
    PrimeiroAcessoComponent    
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
    RelacionarPermissoesBuscarRoutingModule,
    RelacionarPermissoesAtivarRoutingModule,
    GerenciamentoUsuarioListarRoutingModule,
    GerenciamentoUsuarioEditarRoutingModule,
    PrimeiroAcessoRoutingModule,
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