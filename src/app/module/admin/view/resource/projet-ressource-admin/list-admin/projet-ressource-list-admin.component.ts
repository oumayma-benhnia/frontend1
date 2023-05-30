import {Component, OnInit} from '@angular/core';
import {ProjetRessourceService} from 'src/app/controller/service/ProjetRessource.service';
import {ProjetRessourceDto} from 'src/app/controller/model/ProjetRessource.model';
import {ProjetRessourceCriteria} from 'src/app/controller/criteria/ProjetRessourceCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { RessourceService } from 'src/app/controller/service/Ressource.service';
import { ProjetService } from 'src/app/controller/service/Projet.service';

import {RessourceDto} from 'src/app/controller/model/Ressource.model';
import {ProjetDto} from 'src/app/controller/model/Projet.model';


@Component({
  selector: 'app-projet-ressource-list-admin',
  templateUrl: './projet-ressource-list-admin.component.html'
})
export class ProjetRessourceListAdminComponent extends AbstractListController<ProjetRessourceDto, ProjetRessourceCriteria, ProjetRessourceService>  implements OnInit {

    fileName = 'ProjetRessource';

    ressources :Array<RessourceDto>;
    projets :Array<ProjetDto>;
  
    constructor(projetRessourceService: ProjetRessourceService, private ressourceService: RessourceService, private projetService: ProjetService) {
        super(projetRessourceService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadRessource();
      this.loadProjet();
    }

    public async loadProjetRessources(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ProjetRessource', 'list');
        isPermistted ? this.service.findAll().subscribe(projetRessources => this.items = projetRessources,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'ressource?.id', header: 'Ressource'},
            {field: 'prix', header: 'Prix'},
            {field: 'quantite', header: 'Quantite'},
            {field: 'projet?.code', header: 'Projet'},
        ];
    }


    public async loadRessource(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ProjetRessource', 'list');
        isPermistted ? this.ressourceService.findAll().subscribe(ressources => this.ressources = ressources,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadProjet(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ProjetRessource', 'list');
        isPermistted ? this.projetService.findAllOptimized().subscribe(projets => this.projets = projets,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ProjetRessourceDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                'Ressource': e.ressource?.id ,
                 'Prix': e.prix ,
                 'Quantite': e.quantite ,
                'Projet': e.projet?.code ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Ressource': this.criteria.ressource?.id ? this.criteria.ressource?.id : environment.emptyForExport ,
            'Prix Min': this.criteria.prixMin ? this.criteria.prixMin : environment.emptyForExport ,
            'Prix Max': this.criteria.prixMax ? this.criteria.prixMax : environment.emptyForExport ,
            'Quantite': this.criteria.quantite ? this.criteria.quantite : environment.emptyForExport ,
        //'Projet': this.criteria.projet?.code ? this.criteria.projet?.code : environment.emptyForExport ,
        }];
      }
}
