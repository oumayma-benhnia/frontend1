
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ComptableListAdminComponent } from './comptable-admin/list-admin/comptable-list-admin.component';
import { DeclarationListAdminComponent } from './declaration-admin/list-admin/declaration-list-admin.component';
import { PaiementListAdminComponent } from './paiement-admin/list-admin/paiement-list-admin.component';
import { FactureListAdminComponent } from './facture-admin/list-admin/facture-list-admin.component';
import { MoyenPaiementListAdminComponent } from './moyen-paiement-admin/list-admin/moyen-paiement-list-admin.component';
import { TypeDeclarationListAdminComponent } from './type-declaration-admin/list-admin/type-declaration-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'comptable',
                            children: [
                                {
                                    path: 'list',
                                    component: ComptableListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'declaration',
                            children: [
                                {
                                    path: 'list',
                                    component: DeclarationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'paiement',
                            children: [
                                {
                                    path: 'list',
                                    component: PaiementListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'facture',
                            children: [
                                {
                                    path: 'list',
                                    component: FactureListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'moyen-paiement',
                            children: [
                                {
                                    path: 'list',
                                    component: MoyenPaiementListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-declaration',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeDeclarationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class FactureAdminRoutingModule { }
