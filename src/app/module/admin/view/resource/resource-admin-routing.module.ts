
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ProjetRessourceListAdminComponent } from './projet-ressource-admin/list-admin/projet-ressource-list-admin.component';
import { RessourceListAdminComponent } from './ressource-admin/list-admin/ressource-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'projet-ressource',
                            children: [
                                {
                                    path: 'list',
                                    component: ProjetRessourceListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'ressource',
                            children: [
                                {
                                    path: 'list',
                                    component: RessourceListAdminComponent ,
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
export class ResourceAdminRoutingModule { }
