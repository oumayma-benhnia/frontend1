import {Component, OnInit} from '@angular/core';
import {TacheService} from 'src/app/controller/service/Tache.service';
import {TacheDto} from 'src/app/controller/model/Tache.model';
import {TacheCriteria} from 'src/app/controller/criteria/TacheCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { CollaborateurService } from 'src/app/controller/service/Collaborateur.service';

import {CollaborateurDto} from 'src/app/controller/model/Collaborateur.model';


@Component({
  selector: 'app-tache-list-admin',
  templateUrl: './tache-list-admin.component.html'
})
export class TacheListAdminComponent extends AbstractListController<TacheDto, TacheCriteria, TacheService>  implements OnInit {

    fileName = 'Tache';

    collaborateurs :Array<CollaborateurDto>;
  
    constructor(tacheService: TacheService, private collaborateurService: CollaborateurService) {
        super(tacheService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCollaborateur();
    }

    public async loadTaches(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Tache', 'list');
        isPermistted ? this.service.findAll().subscribe(taches => this.items = taches,error=>console.log(error))
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
            {field: 'collaborateur?.code', header: 'Collaborateur'},
        ];
    }


    public async loadCollaborateur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Tache', 'list');
        isPermistted ? this.collaborateurService.findAllOptimized().subscribe(collaborateurs => this.collaborateurs = collaborateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: TacheDto) {
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
                'Collaborateur': e.collaborateur?.code ,
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
        //'Collaborateur': this.criteria.collaborateur?.code ? this.criteria.collaborateur?.code : environment.emptyForExport ,
        }];
      }
}
