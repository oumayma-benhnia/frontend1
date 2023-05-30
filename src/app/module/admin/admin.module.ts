import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { FactureAdminModule } from './view/facture/facture-admin.module';
import { FactureAdminRoutingModule } from './view/facture/facture-admin-routing.module';
import { ProjetAdminModule } from './view/projet/projet-admin.module';
import { ProjetAdminRoutingModule } from './view/projet/projet-admin-routing.module';
import { ResourceAdminModule } from './view/resource/resource-admin.module';
import { ResourceAdminRoutingModule } from './view/resource/resource-admin-routing.module';
import { RessourceAdminModule } from './view/ressource/ressource-admin.module';
import { RessourceAdminRoutingModule } from './view/ressource/ressource-admin-routing.module';
import { CollaborateurAdminModule } from './view/collaborateur/collaborateur-admin.module';
import { CollaborateurAdminRoutingModule } from './view/collaborateur/collaborateur-admin-routing.module';


import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  FactureAdminModule,
  FactureAdminRoutingModule,
  ProjetAdminModule,
  ProjetAdminRoutingModule,
  ResourceAdminModule,
  ResourceAdminRoutingModule,
  RessourceAdminModule,
  RessourceAdminRoutingModule,
  CollaborateurAdminModule,
  CollaborateurAdminRoutingModule,
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    FactureAdminModule,
    ProjetAdminModule,
    ResourceAdminModule,
    RessourceAdminModule,
    CollaborateurAdminModule,
  ],
  entryComponents: [],
})
export class AdminModule { }
