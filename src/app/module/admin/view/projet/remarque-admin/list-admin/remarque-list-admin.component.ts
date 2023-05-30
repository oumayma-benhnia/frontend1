import {Component, OnInit} from '@angular/core';
import {RemarqueService} from 'src/app/controller/service/Remarque.service';
import {RemarqueDto} from 'src/app/controller/model/Remarque.model';
import {RemarqueCriteria} from 'src/app/controller/criteria/RemarqueCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { ProjetService } from 'src/app/controller/service/Projet.service';

import {ProjetDto} from 'src/app/controller/model/Projet.model';


@Component({
  selector: 'app-remarque-list-admin',
  templateUrl: './remarque-list-admin.component.html'
})
export class RemarqueListAdminComponent extends AbstractListController<RemarqueDto, RemarqueCriteria, RemarqueService>  implements OnInit {

    fileName = 'Remarque';

    projets :Array<ProjetDto>;
  
    constructor(remarqueService: RemarqueService, private projetService: ProjetService) {
        super(remarqueService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProjet();
    }

    public async loadRemarques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Remarque', 'list');
        isPermistted ? this.service.findAll().subscribe(remarques => this.items = remarques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'dateRemarque', header: 'Date remarque'},
            {field: 'projet?.code', header: 'Projet'},
        ];
    }


    public async loadProjet(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Remarque', 'list');
        isPermistted ? this.projetService.findAllOptimized().subscribe(projets => this.projets = projets,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: RemarqueDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                'Date remarque': this.datePipe.transform(e.dateRemarque , 'dd/MM/yyyy hh:mm'),
                'Projet': e.projet?.code ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Date remarque Min': this.criteria.dateRemarqueFrom ? this.datePipe.transform(this.criteria.dateRemarqueFrom , this.dateFormat) : environment.emptyForExport ,
            'Date remarque Max': this.criteria.dateRemarqueTo ? this.datePipe.transform(this.criteria.dateRemarqueTo , this.dateFormat) : environment.emptyForExport ,
        //'Projet': this.criteria.projet?.code ? this.criteria.projet?.code : environment.emptyForExport ,
        }];
      }
}
