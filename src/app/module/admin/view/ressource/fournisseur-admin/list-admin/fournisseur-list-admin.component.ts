import {Component, OnInit} from '@angular/core';
import {FournisseurService} from 'src/app/controller/service/Fournisseur.service';
import {FournisseurDto} from 'src/app/controller/model/Fournisseur.model';
import {FournisseurCriteria} from 'src/app/controller/criteria/FournisseurCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-fournisseur-list-admin',
  templateUrl: './fournisseur-list-admin.component.html'
})
export class FournisseurListAdminComponent extends AbstractListController<FournisseurDto, FournisseurCriteria, FournisseurService>  implements OnInit {

    fileName = 'Fournisseur';

  
    constructor(fournisseurService: FournisseurService) {
        super(fournisseurService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadFournisseurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Fournisseur', 'list');
        isPermistted ? this.service.findAll().subscribe(fournisseurs => this.items = fournisseurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'email', header: 'Email'},
            {field: 'tele', header: 'Tele'},
            {field: 'societe', header: 'Societe'},
        ];
    }



	public initDuplicate(res: FournisseurDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
                 'Email': e.email ,
                 'Tele': e.tele ,
                 'Societe': e.societe ,
                 'Adresse': e.adresse ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Tele': this.criteria.tele ? this.criteria.tele : environment.emptyForExport ,
            'Societe': this.criteria.societe ? this.criteria.societe : environment.emptyForExport ,
            'Adresse': this.criteria.adresse ? this.criteria.adresse : environment.emptyForExport ,
        }];
      }
}
