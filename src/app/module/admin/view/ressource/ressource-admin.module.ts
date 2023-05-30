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

import { MaterielCreateAdminComponent } from './materiel-admin/create-admin/materiel-create-admin.component';
import { MaterielEditAdminComponent } from './materiel-admin/edit-admin/materiel-edit-admin.component';
import { MaterielViewAdminComponent } from './materiel-admin/view-admin/materiel-view-admin.component';
import { MaterielListAdminComponent } from './materiel-admin/list-admin/materiel-list-admin.component';
import { CollaborateurCreateAdminComponent } from './collaborateur-admin/create-admin/collaborateur-create-admin.component';
import { CollaborateurEditAdminComponent } from './collaborateur-admin/edit-admin/collaborateur-edit-admin.component';
import { CollaborateurViewAdminComponent } from './collaborateur-admin/view-admin/collaborateur-view-admin.component';
import { CollaborateurListAdminComponent } from './collaborateur-admin/list-admin/collaborateur-list-admin.component';
import { FournisseurCreateAdminComponent } from './fournisseur-admin/create-admin/fournisseur-create-admin.component';
import { FournisseurEditAdminComponent } from './fournisseur-admin/edit-admin/fournisseur-edit-admin.component';
import { FournisseurViewAdminComponent } from './fournisseur-admin/view-admin/fournisseur-view-admin.component';
import { FournisseurListAdminComponent } from './fournisseur-admin/list-admin/fournisseur-list-admin.component';
import { EntiteAdministrativeCreateAdminComponent } from './entite-administrative-admin/create-admin/entite-administrative-create-admin.component';
import { EntiteAdministrativeEditAdminComponent } from './entite-administrative-admin/edit-admin/entite-administrative-edit-admin.component';
import { EntiteAdministrativeViewAdminComponent } from './entite-administrative-admin/view-admin/entite-administrative-view-admin.component';
import { EntiteAdministrativeListAdminComponent } from './entite-administrative-admin/list-admin/entite-administrative-list-admin.component';
import { CategorieMaterielCreateAdminComponent } from './categorie-materiel-admin/create-admin/categorie-materiel-create-admin.component';
import { CategorieMaterielEditAdminComponent } from './categorie-materiel-admin/edit-admin/categorie-materiel-edit-admin.component';
import { CategorieMaterielViewAdminComponent } from './categorie-materiel-admin/view-admin/categorie-materiel-view-admin.component';
import { CategorieMaterielListAdminComponent } from './categorie-materiel-admin/list-admin/categorie-materiel-list-admin.component';

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

    MaterielCreateAdminComponent,
    MaterielListAdminComponent,
    MaterielViewAdminComponent,
    MaterielEditAdminComponent,
    CollaborateurCreateAdminComponent,
    CollaborateurListAdminComponent,
    CollaborateurViewAdminComponent,
    CollaborateurEditAdminComponent,
    FournisseurCreateAdminComponent,
    FournisseurListAdminComponent,
    FournisseurViewAdminComponent,
    FournisseurEditAdminComponent,
    EntiteAdministrativeCreateAdminComponent,
    EntiteAdministrativeListAdminComponent,
    EntiteAdministrativeViewAdminComponent,
    EntiteAdministrativeEditAdminComponent,
    CategorieMaterielCreateAdminComponent,
    CategorieMaterielListAdminComponent,
    CategorieMaterielViewAdminComponent,
    CategorieMaterielEditAdminComponent,
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
  MaterielCreateAdminComponent,
  MaterielListAdminComponent,
  MaterielViewAdminComponent,
  MaterielEditAdminComponent,
  CollaborateurCreateAdminComponent,
  CollaborateurListAdminComponent,
  CollaborateurViewAdminComponent,
  CollaborateurEditAdminComponent,
  FournisseurCreateAdminComponent,
  FournisseurListAdminComponent,
  FournisseurViewAdminComponent,
  FournisseurEditAdminComponent,
  EntiteAdministrativeCreateAdminComponent,
  EntiteAdministrativeListAdminComponent,
  EntiteAdministrativeViewAdminComponent,
  EntiteAdministrativeEditAdminComponent,
  CategorieMaterielCreateAdminComponent,
  CategorieMaterielListAdminComponent,
  CategorieMaterielViewAdminComponent,
  CategorieMaterielEditAdminComponent,
  ],
  entryComponents: [],
})
export class RessourceAdminModule { }