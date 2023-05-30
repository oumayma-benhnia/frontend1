import {Component, OnInit} from '@angular/core';
import {ProjetService} from 'src/app/controller/service/Projet.service';
import {ProjetDto} from 'src/app/controller/model/Projet.model';
import {ProjetCriteria} from 'src/app/controller/criteria/ProjetCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { TypeProjetService } from 'src/app/controller/service/TypeProjet.service';
import { ClientService } from 'src/app/controller/service/Client.service';
import { ChefProjetService } from 'src/app/controller/service/ChefProjet.service';

import {ChefProjetDto} from 'src/app/controller/model/ChefProjet.model';
import {RemarqueDto} from 'src/app/controller/model/Remarque.model';
import {ProjetRessourceDto} from 'src/app/controller/model/ProjetRessource.model';
import {TypeProjetDto} from 'src/app/controller/model/TypeProjet.model';
import {ClientDto} from 'src/app/controller/model/Client.model';
import {TacheDto} from 'src/app/controller/model/Tache.model';


@Component({
  selector: 'app-projet-list-admin',
  templateUrl: './projet-list-admin.component.html'
})
export class ProjetListAdminComponent extends AbstractListController<ProjetDto, ProjetCriteria, ProjetService>  implements OnInit {

    fileName = 'Projet';

    typeProjets :Array<TypeProjetDto>;
    clients :Array<ClientDto>;
    chefProjets :Array<ChefProjetDto>;
  
    constructor(projetService: ProjetService, private typeProjetService: TypeProjetService, private clientService: ClientService, private chefProjetService: ChefProjetService) {
        super(projetService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadTypeProjet();
      this.loadClient();
      this.loadChefProjet();
    }

    public async loadProjets(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Projet', 'list');
        isPermistted ? this.service.findAll().subscribe(projets => this.items = projets,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'typeProjet?.libelle', header: 'Type projet'},
            {field: 'budget', header: 'Budget'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'dateFinEstime', header: 'Date fin estime'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'client?.code', header: 'Client'},
            {field: 'chefProjet?.code', header: 'Chef projet'},
        ];
    }


    public async loadTypeProjet(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Projet', 'list');
        isPermistted ? this.typeProjetService.findAllOptimized().subscribe(typeProjets => this.typeProjets = typeProjets,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadClient(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Projet', 'list');
        isPermistted ? this.clientService.findAllOptimized().subscribe(clients => this.clients = clients,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadChefProjet(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Projet', 'list');
        isPermistted ? this.chefProjetService.findAllOptimized().subscribe(chefProjets => this.chefProjets = chefProjets,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ProjetDto) {
        if (res.projetRessources != null) {
             res.projetRessources.forEach(d => { d.projet = null; d.id = null; });
        }
        if (res.taches != null) {
             res.taches.forEach(d => { d.projet = null; d.id = null; });
        }
        if (res.remarques != null) {
             res.remarques.forEach(d => { d.projet = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                'Type projet': e.typeProjet?.libelle ,
                 'Budget': e.budget ,
                 'Progression': e.progression ,
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy hh:mm'),
                'Date fin estime': this.datePipe.transform(e.dateFinEstime , 'dd/MM/yyyy hh:mm'),
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
                'Client': e.client?.code ,
                'Chef projet': e.chefProjet?.code ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Type projet': this.criteria.typeProjet?.libelle ? this.criteria.typeProjet?.libelle : environment.emptyForExport ,
            'Budget Min': this.criteria.budgetMin ? this.criteria.budgetMin : environment.emptyForExport ,
            'Budget Max': this.criteria.budgetMax ? this.criteria.budgetMax : environment.emptyForExport ,
            'Progression': this.criteria.progression ? this.criteria.progression : environment.emptyForExport ,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Date fin estime Min': this.criteria.dateFinEstimeFrom ? this.datePipe.transform(this.criteria.dateFinEstimeFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin estime Max': this.criteria.dateFinEstimeTo ? this.datePipe.transform(this.criteria.dateFinEstimeTo , this.dateFormat) : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
        //'Client': this.criteria.client?.code ? this.criteria.client?.code : environment.emptyForExport ,
        //'Chef projet': this.criteria.chefProjet?.code ? this.criteria.chefProjet?.code : environment.emptyForExport ,
        }];
      }
}
