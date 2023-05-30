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

import { ComptableCreateAdminComponent } from './comptable-admin/create-admin/comptable-create-admin.component';
import { ComptableEditAdminComponent } from './comptable-admin/edit-admin/comptable-edit-admin.component';
import { ComptableViewAdminComponent } from './comptable-admin/view-admin/comptable-view-admin.component';
import { ComptableListAdminComponent } from './comptable-admin/list-admin/comptable-list-admin.component';
import { DeclarationCreateAdminComponent } from './declaration-admin/create-admin/declaration-create-admin.component';
import { DeclarationEditAdminComponent } from './declaration-admin/edit-admin/declaration-edit-admin.component';
import { DeclarationViewAdminComponent } from './declaration-admin/view-admin/declaration-view-admin.component';
import { DeclarationListAdminComponent } from './declaration-admin/list-admin/declaration-list-admin.component';
import { PaiementCreateAdminComponent } from './paiement-admin/create-admin/paiement-create-admin.component';
import { PaiementEditAdminComponent } from './paiement-admin/edit-admin/paiement-edit-admin.component';
import { PaiementViewAdminComponent } from './paiement-admin/view-admin/paiement-view-admin.component';
import { PaiementListAdminComponent } from './paiement-admin/list-admin/paiement-list-admin.component';
import { FactureCreateAdminComponent } from './facture-admin/create-admin/facture-create-admin.component';
import { FactureEditAdminComponent } from './facture-admin/edit-admin/facture-edit-admin.component';
import { FactureViewAdminComponent } from './facture-admin/view-admin/facture-view-admin.component';
import { FactureListAdminComponent } from './facture-admin/list-admin/facture-list-admin.component';
import { MoyenPaiementCreateAdminComponent } from './moyen-paiement-admin/create-admin/moyen-paiement-create-admin.component';
import { MoyenPaiementEditAdminComponent } from './moyen-paiement-admin/edit-admin/moyen-paiement-edit-admin.component';
import { MoyenPaiementViewAdminComponent } from './moyen-paiement-admin/view-admin/moyen-paiement-view-admin.component';
import { MoyenPaiementListAdminComponent } from './moyen-paiement-admin/list-admin/moyen-paiement-list-admin.component';
import { TypeDeclarationCreateAdminComponent } from './type-declaration-admin/create-admin/type-declaration-create-admin.component';
import { TypeDeclarationEditAdminComponent } from './type-declaration-admin/edit-admin/type-declaration-edit-admin.component';
import { TypeDeclarationViewAdminComponent } from './type-declaration-admin/view-admin/type-declaration-view-admin.component';
import { TypeDeclarationListAdminComponent } from './type-declaration-admin/list-admin/type-declaration-list-admin.component';

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

    ComptableCreateAdminComponent,
    ComptableListAdminComponent,
    ComptableViewAdminComponent,
    ComptableEditAdminComponent,
    DeclarationCreateAdminComponent,
    DeclarationListAdminComponent,
    DeclarationViewAdminComponent,
    DeclarationEditAdminComponent,
    PaiementCreateAdminComponent,
    PaiementListAdminComponent,
    PaiementViewAdminComponent,
    PaiementEditAdminComponent,
    FactureCreateAdminComponent,
    FactureListAdminComponent,
    FactureViewAdminComponent,
    FactureEditAdminComponent,
    MoyenPaiementCreateAdminComponent,
    MoyenPaiementListAdminComponent,
    MoyenPaiementViewAdminComponent,
    MoyenPaiementEditAdminComponent,
    TypeDeclarationCreateAdminComponent,
    TypeDeclarationListAdminComponent,
    TypeDeclarationViewAdminComponent,
    TypeDeclarationEditAdminComponent,
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
  ComptableCreateAdminComponent,
  ComptableListAdminComponent,
  ComptableViewAdminComponent,
  ComptableEditAdminComponent,
  DeclarationCreateAdminComponent,
  DeclarationListAdminComponent,
  DeclarationViewAdminComponent,
  DeclarationEditAdminComponent,
  PaiementCreateAdminComponent,
  PaiementListAdminComponent,
  PaiementViewAdminComponent,
  PaiementEditAdminComponent,
  FactureCreateAdminComponent,
  FactureListAdminComponent,
  FactureViewAdminComponent,
  FactureEditAdminComponent,
  MoyenPaiementCreateAdminComponent,
  MoyenPaiementListAdminComponent,
  MoyenPaiementViewAdminComponent,
  MoyenPaiementEditAdminComponent,
  TypeDeclarationCreateAdminComponent,
  TypeDeclarationListAdminComponent,
  TypeDeclarationViewAdminComponent,
  TypeDeclarationEditAdminComponent,
  ],
  entryComponents: [],
})
export class FactureAdminModule { }