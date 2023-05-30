
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'facture',
                            loadChildren: () => import('./view/facture/facture-admin-routing.module').then(x=>x.FactureAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'projet',
                            loadChildren: () => import('./view/projet/projet-admin-routing.module').then(x=>x.ProjetAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'resource',
                            loadChildren: () => import('./view/resource/resource-admin-routing.module').then(x=>x.ResourceAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'ressource',
                            loadChildren: () => import('./view/ressource/ressource-admin-routing.module').then(x=>x.RessourceAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'collaborateur',
                            loadChildren: () => import('./view/collaborateur/collaborateur-admin-routing.module').then(x=>x.CollaborateurAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
