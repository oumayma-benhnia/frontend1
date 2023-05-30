import {Component, OnInit} from '@angular/core';
import {PaiementService} from 'src/app/controller/service/Paiement.service';
import {PaiementDto} from 'src/app/controller/model/Paiement.model';
import {PaiementCriteria} from 'src/app/controller/criteria/PaiementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { FactureService } from 'src/app/controller/service/Facture.service';
import { MoyenPaiementService } from 'src/app/controller/service/MoyenPaiement.service';

import {FactureDto} from 'src/app/controller/model/Facture.model';
import {MoyenPaiementDto} from 'src/app/controller/model/MoyenPaiement.model';


@Component({
  selector: 'app-paiement-list-admin',
  templateUrl: './paiement-list-admin.component.html'
})
export class PaiementListAdminComponent extends AbstractListController<PaiementDto, PaiementCriteria, PaiementService>  implements OnInit {

    fileName = 'Paiement';

    factures :Array<FactureDto>;
    moyenPaiements :Array<MoyenPaiementDto>;
  
    constructor(paiementService: PaiementService, private factureService: FactureService, private moyenPaiementService: MoyenPaiementService) {
        super(paiementService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadFacture();
      this.loadMoyenPaiement();
    }

    public async loadPaiements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Paiement', 'list');
        isPermistted ? this.service.findAll().subscribe(paiements => this.items = paiements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'facture?.libelle', header: 'Facture'},
            {field: 'datePaiement', header: 'Date paiement'},
            {field: 'montant', header: 'Montant'},
            {field: 'moyenPaiement?.code', header: 'Moyen paiement'},
        ];
    }


    public async loadFacture(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Paiement', 'list');
        isPermistted ? this.factureService.findAllOptimized().subscribe(factures => this.factures = factures,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadMoyenPaiement(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Paiement', 'list');
        isPermistted ? this.moyenPaiementService.findAllOptimized().subscribe(moyenPaiements => this.moyenPaiements = moyenPaiements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: PaiementDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                'Facture': e.facture?.libelle ,
                'Date paiement': this.datePipe.transform(e.datePaiement , 'dd/MM/yyyy hh:mm'),
                 'Montant': e.montant ,
                'Moyen paiement': e.moyenPaiement?.code ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Facture': this.criteria.facture?.libelle ? this.criteria.facture?.libelle : environment.emptyForExport ,
            'Date paiement Min': this.criteria.datePaiementFrom ? this.datePipe.transform(this.criteria.datePaiementFrom , this.dateFormat) : environment.emptyForExport ,
            'Date paiement Max': this.criteria.datePaiementTo ? this.datePipe.transform(this.criteria.datePaiementTo , this.dateFormat) : environment.emptyForExport ,
            'Montant Min': this.criteria.montantMin ? this.criteria.montantMin : environment.emptyForExport ,
            'Montant Max': this.criteria.montantMax ? this.criteria.montantMax : environment.emptyForExport ,
        //'Moyen paiement': this.criteria.moyenPaiement?.code ? this.criteria.moyenPaiement?.code : environment.emptyForExport ,
        }];
      }
}
