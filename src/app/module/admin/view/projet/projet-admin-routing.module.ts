
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { RemarqueListAdminComponent } from './remarque-admin/list-admin/remarque-list-admin.component';
import { ChefProjetListAdminComponent } from './chef-projet-admin/list-admin/chef-projet-list-admin.component';
import { ClientListAdminComponent } from './client-admin/list-admin/client-list-admin.component';
import { TypeProjetListAdminComponent } from './type-projet-admin/list-admin/type-projet-list-admin.component';
import { ProjetListAdminComponent } from './projet-admin/list-admin/projet-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'remarque',
                            children: [
                                {
                                    path: 'list',
                                    component: RemarqueListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'chef-projet',
                            children: [
                                {
                                    path: 'list',
                                    component: ChefProjetListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-projet',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeProjetListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'projet',
                            children: [
                                {
                                    path: 'list',
                                    component: ProjetListAdminComponent ,
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
export class ProjetAdminRoutingModule { }
