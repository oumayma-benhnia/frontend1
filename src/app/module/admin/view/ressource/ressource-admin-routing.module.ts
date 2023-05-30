
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { MaterielListAdminComponent } from './materiel-admin/list-admin/materiel-list-admin.component';
import { CollaborateurListAdminComponent } from './collaborateur-admin/list-admin/collaborateur-list-admin.component';
import { FournisseurListAdminComponent } from './fournisseur-admin/list-admin/fournisseur-list-admin.component';
import { EntiteAdministrativeListAdminComponent } from './entite-administrative-admin/list-admin/entite-administrative-list-admin.component';
import { CategorieMaterielListAdminComponent } from './categorie-materiel-admin/list-admin/categorie-materiel-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'materiel',
                            children: [
                                {
                                    path: 'list',
                                    component: MaterielListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'collaborateur',
                            children: [
                                {
                                    path: 'list',
                                    component: CollaborateurListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'fournisseur',
                            children: [
                                {
                                    path: 'list',
                                    component: FournisseurListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'entite-administrative',
                            children: [
                                {
                                    path: 'list',
                                    component: EntiteAdministrativeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-materiel',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieMaterielListAdminComponent ,
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
export class RessourceAdminRoutingModule { }
