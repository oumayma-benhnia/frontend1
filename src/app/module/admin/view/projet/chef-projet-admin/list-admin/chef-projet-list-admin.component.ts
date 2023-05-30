import {Component, OnInit} from '@angular/core';
import {ChefProjetService} from 'src/app/controller/service/ChefProjet.service';
import {ChefProjetDto} from 'src/app/controller/model/ChefProjet.model';
import {ChefProjetCriteria} from 'src/app/controller/criteria/ChefProjetCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-chef-projet-list-admin',
  templateUrl: './chef-projet-list-admin.component.html'
})
export class ChefProjetListAdminComponent extends AbstractListController<ChefProjetDto, ChefProjetCriteria, ChefProjetService>  implements OnInit {

    fileName = 'ChefProjet';

  
    constructor(chefProjetService: ChefProjetService) {
        super(chefProjetService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadChefProjets(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ChefProjet', 'list');
        isPermistted ? this.service.findAll().subscribe(chefProjets => this.items = chefProjets,error=>console.log(error))
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



	public initDuplicate(res: ChefProjetDto) {
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
