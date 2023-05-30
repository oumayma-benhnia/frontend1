import {Component, OnInit} from '@angular/core';
import {TypeProjetService} from 'src/app/controller/service/TypeProjet.service';
import {TypeProjetDto} from 'src/app/controller/model/TypeProjet.model';
import {TypeProjetCriteria} from 'src/app/controller/criteria/TypeProjetCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-type-projet-list-admin',
  templateUrl: './type-projet-list-admin.component.html'
})
export class TypeProjetListAdminComponent extends AbstractListController<TypeProjetDto, TypeProjetCriteria, TypeProjetService>  implements OnInit {

    fileName = 'TypeProjet';

  
    constructor(typeProjetService: TypeProjetService) {
        super(typeProjetService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypeProjets(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeProjet', 'list');
        isPermistted ? this.service.findAll().subscribe(typeProjets => this.items = typeProjets,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: TypeProjetDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
