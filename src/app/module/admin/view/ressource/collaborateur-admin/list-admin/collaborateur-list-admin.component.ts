import {Component, OnInit} from '@angular/core';
import {CollaborateurService} from 'src/app/controller/service/Collaborateur.service';
import {CollaborateurDto} from 'src/app/controller/model/Collaborateur.model';
import {CollaborateurCriteria} from 'src/app/controller/criteria/CollaborateurCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-collaborateur-list-admin',
  templateUrl: './collaborateur-list-admin.component.html'
})
export class CollaborateurListAdminComponent extends AbstractListController<CollaborateurDto, CollaborateurCriteria, CollaborateurService>  implements OnInit {

    fileName = 'Collaborateur';

  
    constructor(collaborateurService: CollaborateurService) {
        super(collaborateurService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadCollaborateurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Collaborateur', 'list');
        isPermistted ? this.service.findAll().subscribe(collaborateurs => this.items = collaborateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'email', header: 'Email'},
            {field: 'tele', header: 'Tele'},
            {field: 'titre', header: 'Titre'},
            {field: 'salaire', header: 'Salaire'},
        ];
    }



	public initDuplicate(res: CollaborateurDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
                 'Email': e.email ,
                 'Tele': e.tele ,
                 'Titre': e.titre ,
                 'Salaire': e.salaire ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Tele': this.criteria.tele ? this.criteria.tele : environment.emptyForExport ,
            'Titre': this.criteria.titre ? this.criteria.titre : environment.emptyForExport ,
            'Salaire Min': this.criteria.salaireMin ? this.criteria.salaireMin : environment.emptyForExport ,
            'Salaire Max': this.criteria.salaireMax ? this.criteria.salaireMax : environment.emptyForExport ,
        }];
      }
}
