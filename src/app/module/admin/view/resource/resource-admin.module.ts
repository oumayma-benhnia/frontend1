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

import { ProjetRessourceCreateAdminComponent } from './projet-ressource-admin/create-admin/projet-ressource-create-admin.component';
import { ProjetRessourceEditAdminComponent } from './projet-ressource-admin/edit-admin/projet-ressource-edit-admin.component';
import { ProjetRessourceViewAdminComponent } from './projet-ressource-admin/view-admin/projet-ressource-view-admin.component';
import { ProjetRessourceListAdminComponent } from './projet-ressource-admin/list-admin/projet-ressource-list-admin.component';
import { RessourceCreateAdminComponent } from './ressource-admin/create-admin/ressource-create-admin.component';
import { RessourceEditAdminComponent } from './ressource-admin/edit-admin/ressource-edit-admin.component';
import { RessourceViewAdminComponent } from './ressource-admin/view-admin/ressource-view-admin.component';
import { RessourceListAdminComponent } from './ressource-admin/list-admin/ressource-list-admin.component';

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

    ProjetRessourceCreateAdminComponent,
    ProjetRessourceListAdminComponent,
    ProjetRessourceViewAdminComponent,
    ProjetRessourceEditAdminComponent,
    RessourceCreateAdminComponent,
    RessourceListAdminComponent,
    RessourceViewAdminComponent,
    RessourceEditAdminComponent,
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
  ProjetRessourceCreateAdminComponent,
  ProjetRessourceListAdminComponent,
  ProjetRessourceViewAdminComponent,
  ProjetRessourceEditAdminComponent,
  RessourceCreateAdminComponent,
  RessourceListAdminComponent,
  RessourceViewAdminComponent,
  RessourceEditAdminComponent,
  ],
  entryComponents: [],
})
export class ResourceAdminModule { }