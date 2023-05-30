import {Component, OnInit} from '@angular/core';
import {MaterielService} from 'src/app/controller/service/Materiel.service';
import {MaterielDto} from 'src/app/controller/model/Materiel.model';
import {MaterielCriteria} from 'src/app/controller/criteria/MaterielCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { CategorieMaterielService } from 'src/app/controller/service/CategorieMateriel.service';

import {CategorieMaterielDto} from 'src/app/controller/model/CategorieMateriel.model';


@Component({
  selector: 'app-materiel-list-admin',
  templateUrl: './materiel-list-admin.component.html'
})
export class MaterielListAdminComponent extends AbstractListController<MaterielDto, MaterielCriteria, MaterielService>  implements OnInit {

    fileName = 'Materiel';

    categorieMateriels :Array<CategorieMaterielDto>;
  
    constructor(materielService: MaterielService, private categorieMaterielService: CategorieMaterielService) {
        super(materielService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCategorieMateriel();
    }

    public async loadMateriels(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Materiel', 'list');
        isPermistted ? this.service.findAll().subscribe(materiels => this.items = materiels,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'reference', header: 'Reference'},
            {field: 'quantite', header: 'Quantite'},
            {field: 'categorieMateriel?.libelle', header: 'Categorie materiel'},
            {field: 'prix', header: 'Prix'},
        ];
    }


    public async loadCategorieMateriel(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Materiel', 'list');
        isPermistted ? this.categorieMaterielService.findAllOptimized().subscribe(categorieMateriels => this.categorieMateriels = categorieMateriels,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: MaterielDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Reference': e.reference ,
                 'Quantite': e.quantite ,
                'Categorie materiel': e.categorieMateriel?.libelle ,
                 'Prix': e.prix ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Quantite': this.criteria.quantite ? this.criteria.quantite : environment.emptyForExport ,
        //'Categorie materiel': this.criteria.categorieMateriel?.libelle ? this.criteria.categorieMateriel?.libelle : environment.emptyForExport ,
            'Prix Min': this.criteria.prixMin ? this.criteria.prixMin : environment.emptyForExport ,
            'Prix Max': this.criteria.prixMax ? this.criteria.prixMax : environment.emptyForExport ,
        }];
      }
}
