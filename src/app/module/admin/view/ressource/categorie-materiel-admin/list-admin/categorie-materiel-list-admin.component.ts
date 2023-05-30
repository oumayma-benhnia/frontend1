import {Component, OnInit} from '@angular/core';
import {CategorieMaterielService} from 'src/app/controller/service/CategorieMateriel.service';
import {CategorieMaterielDto} from 'src/app/controller/model/CategorieMateriel.model';
import {CategorieMaterielCriteria} from 'src/app/controller/criteria/CategorieMaterielCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-categorie-materiel-list-admin',
  templateUrl: './categorie-materiel-list-admin.component.html'
})
export class CategorieMaterielListAdminComponent extends AbstractListController<CategorieMaterielDto, CategorieMaterielCriteria, CategorieMaterielService>  implements OnInit {

    fileName = 'CategorieMateriel';

  
    constructor(categorieMaterielService: CategorieMaterielService) {
        super(categorieMaterielService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadCategorieMateriels(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CategorieMateriel', 'list');
        isPermistted ? this.service.findAll().subscribe(categorieMateriels => this.items = categorieMateriels,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'reference', header: 'Reference'},
        ];
    }



	public initDuplicate(res: CategorieMaterielDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Reference': e.reference ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
        }];
      }
}
