import {Component, OnInit} from '@angular/core';
import {ComptableService} from 'src/app/controller/service/Comptable.service';
import {ComptableDto} from 'src/app/controller/model/Comptable.model';
import {ComptableCriteria} from 'src/app/controller/criteria/ComptableCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-comptable-list-admin',
  templateUrl: './comptable-list-admin.component.html'
})
export class ComptableListAdminComponent extends AbstractListController<ComptableDto, ComptableCriteria, ComptableService>  implements OnInit {

    fileName = 'Comptable';

  
    constructor(comptableService: ComptableService) {
        super(comptableService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadComptables(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Comptable', 'list');
        isPermistted ? this.service.findAll().subscribe(comptables => this.items = comptables,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'email', header: 'Email'},
            {field: 'tele', header: 'Tele'},
            {field: 'salaire', header: 'Salaire'},
        ];
    }



	public initDuplicate(res: ComptableDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
                 'Email': e.email ,
                 'Tele': e.tele ,
                 'Salaire': e.salaire ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Tele': this.criteria.tele ? this.criteria.tele : environment.emptyForExport ,
            'Salaire Min': this.criteria.salaireMin ? this.criteria.salaireMin : environment.emptyForExport ,
            'Salaire Max': this.criteria.salaireMax ? this.criteria.salaireMax : environment.emptyForExport ,
        }];
      }
}
