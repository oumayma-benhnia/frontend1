import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { RoleService } from 'src/app/zynerator/security/Role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
              {
                label: 'Gestion Collaborateur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste tache',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/collaborateur/tache/list']
                    },
                    {
                      label: 'Liste collaborateur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/ressource/collaborateur/list']
                    },
                    {
                      label: 'Liste fournisseur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/ressource/fournisseur/list']
                    },
                ]
              },
              {
                label: 'Gestion Projet',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste remarque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/projet/remarque/list']
                    },
                    {
                      label: 'Liste chef projet',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/projet/chef-projet/list']
                    },
                    {
                      label: 'Liste client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/projet/client/list']
                    },
                    {
                      label: 'Liste type projet',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/projet/type-projet/list']
                    },
                    {
                      label: 'Liste projet',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/projet/projet/list']
                    },
                ]
              },
              {
                label: 'Gestion Facture',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste paiement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/facture/paiement/list']
                    },
                    {
                      label: 'Liste facture',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/facture/facture/list']
                    },
                    {
                      label: 'Liste moyen paiement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/facture/moyen-paiement/list']
                    },
                ]
              },
              {
                label: 'Gestion Comptable',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste comptable',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/facture/comptable/list']
                    },
                    {
                      label: 'Liste declaration',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/facture/declaration/list']
                    },
                    {
                      label: 'Liste type declaration',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/facture/type-declaration/list']
                    },
                ]
              },
              {
                label: 'Gestion Ressource',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste materiel',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/ressource/materiel/list']
                    },
                    {
                      label: 'Liste projet ressource',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/resource/projet-ressource/list']
                    },
                    {
                      label: 'Liste entite administrative',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/ressource/entite-administrative/list']
                    },
                    {
                      label: 'Liste ressource',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/resource/ressource/list']
                    },
                    {
                      label: 'Liste categorie materiel',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/ressource/categorie-materiel/list']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
