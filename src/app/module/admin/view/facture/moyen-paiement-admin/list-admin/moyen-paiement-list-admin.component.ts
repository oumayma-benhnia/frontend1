import {Component, OnInit} from '@angular/core';
import {MoyenPaiementService} from 'src/app/controller/service/MoyenPaiement.service';
import {MoyenPaiementDto} from 'src/app/controller/model/MoyenPaiement.model';
import {MoyenPaiementCriteria} from 'src/app/controller/criteria/MoyenPaiementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-moyen-paiement-list-admin',
  templateUrl: './moyen-paiement-list-admin.component.html'
})
export class MoyenPaiementListAdminComponent extends AbstractListController<MoyenPaiementDto, MoyenPaiementCriteria, MoyenPaiementService>  implements OnInit {

    fileName = 'MoyenPaiement';

  
    constructor(moyenPaiementService: MoyenPaiementService) {
        super(moyenPaiementService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadMoyenPaiements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('MoyenPaiement', 'list');
        isPermistted ? this.service.findAll().subscribe(moyenPaiements => this.items = moyenPaiements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'dateRemarque', header: 'Date remarque'},
        ];
    }



	public initDuplicate(res: MoyenPaiementDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                'Date remarque': this.datePipe.transform(e.dateRemarque , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Date remarque Min': this.criteria.dateRemarqueFrom ? this.datePipe.transform(this.criteria.dateRemarqueFrom , this.dateFormat) : environment.emptyForExport ,
            'Date remarque Max': this.criteria.dateRemarqueTo ? this.datePipe.transform(this.criteria.dateRemarqueTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
