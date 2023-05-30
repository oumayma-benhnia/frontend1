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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from "primeng/fileupload";

import { RemarqueCreateAdminComponent } from './remarque-admin/create-admin/remarque-create-admin.component';
import { RemarqueEditAdminComponent } from './remarque-admin/edit-admin/remarque-edit-admin.component';
import { RemarqueViewAdminComponent } from './remarque-admin/view-admin/remarque-view-admin.component';
import { RemarqueListAdminComponent } from './remarque-admin/list-admin/remarque-list-admin.component';
import { ChefProjetCreateAdminComponent } from './chef-projet-admin/create-admin/chef-projet-create-admin.component';
import { ChefProjetEditAdminComponent } from './chef-projet-admin/edit-admin/chef-projet-edit-admin.component';
import { ChefProjetViewAdminComponent } from './chef-projet-admin/view-admin/chef-projet-view-admin.component';
import { ChefProjetListAdminComponent } from './chef-projet-admin/list-admin/chef-projet-list-admin.component';
import { ClientCreateAdminComponent } from './client-admin/create-admin/client-create-admin.component';
import { ClientEditAdminComponent } from './client-admin/edit-admin/client-edit-admin.component';
import { ClientViewAdminComponent } from './client-admin/view-admin/client-view-admin.component';
import { ClientListAdminComponent } from './client-admin/list-admin/client-list-admin.component';
import { TypeProjetCreateAdminComponent } from './type-projet-admin/create-admin/type-projet-create-admin.component';
import { TypeProjetEditAdminComponent } from './type-projet-admin/edit-admin/type-projet-edit-admin.component';
import { TypeProjetViewAdminComponent } from './type-projet-admin/view-admin/type-projet-view-admin.component';
import { TypeProjetListAdminComponent } from './type-projet-admin/list-admin/type-projet-list-admin.component';
import { ProjetCreateAdminComponent } from './projet-admin/create-admin/projet-create-admin.component';
import { ProjetEditAdminComponent } from './projet-admin/edit-admin/projet-edit-admin.component';
import { ProjetViewAdminComponent } from './projet-admin/view-admin/projet-view-admin.component';
import { ProjetListAdminComponent } from './projet-admin/list-admin/projet-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    RemarqueCreateAdminComponent,
    RemarqueListAdminComponent,
    RemarqueViewAdminComponent,
    RemarqueEditAdminComponent,
    ChefProjetCreateAdminComponent,
    ChefProjetListAdminComponent,
    ChefProjetViewAdminComponent,
    ChefProjetEditAdminComponent,
    ClientCreateAdminComponent,
    ClientListAdminComponent,
    ClientViewAdminComponent,
    ClientEditAdminComponent,
    TypeProjetCreateAdminComponent,
    TypeProjetListAdminComponent,
    TypeProjetViewAdminComponent,
    TypeProjetEditAdminComponent,
    ProjetCreateAdminComponent,
    ProjetListAdminComponent,
    ProjetViewAdminComponent,
    ProjetEditAdminComponent,
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
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
  ],
  exports: [
  RemarqueCreateAdminComponent,
  RemarqueListAdminComponent,
  RemarqueViewAdminComponent,
  RemarqueEditAdminComponent,
  ChefProjetCreateAdminComponent,
  ChefProjetListAdminComponent,
  ChefProjetViewAdminComponent,
  ChefProjetEditAdminComponent,
  ClientCreateAdminComponent,
  ClientListAdminComponent,
  ClientViewAdminComponent,
  ClientEditAdminComponent,
  TypeProjetCreateAdminComponent,
  TypeProjetListAdminComponent,
  TypeProjetViewAdminComponent,
  TypeProjetEditAdminComponent,
  ProjetCreateAdminComponent,
  ProjetListAdminComponent,
  ProjetViewAdminComponent,
  ProjetEditAdminComponent,
  ],
  entryComponents: [],
})
export class ProjetAdminModule { }