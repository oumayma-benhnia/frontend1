import {Component, OnInit} from '@angular/core';
import {FactureService} from 'src/app/controller/service/Facture.service';
import {FactureDto} from 'src/app/controller/model/Facture.model';
import {FactureCriteria} from 'src/app/controller/criteria/FactureCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { ComptableService } from 'src/app/controller/service/Comptable.service';
import { ProjetService } from 'src/app/controller/service/Projet.service';

import {ProjetDto} from 'src/app/controller/model/Projet.model';
import {ComptableDto} from 'src/app/controller/model/Comptable.model';


@Component({
  selector: 'app-facture-list-admin',
  templateUrl: './facture-list-admin.component.html'
})
export class FactureListAdminComponent extends AbstractListController<FactureDto, FactureCriteria, FactureService>  implements OnInit {

    fileName = 'Facture';

    comptables :Array<ComptableDto>;
    projets :Array<ProjetDto>;
  
    constructor(factureService: FactureService, private comptableService: ComptableService, private projetService: ProjetService) {
        super(factureService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadComptable();
      this.loadProjet();
    }

    public async loadFactures(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Facture', 'list');
        isPermistted ? this.service.findAll().subscribe(factures => this.items = factures,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'montant', header: 'Montant'},
            {field: 'dateEmission', header: 'Date emission'},
            {field: 'dateEcheance', header: 'Date echeance'},
            {field: 'comptable?.code', header: 'Comptable'},
            {field: 'projet?.code', header: 'Projet'},
        ];
    }


    public async loadComptable(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Facture', 'list');
        isPermistted ? this.comptableService.findAllOptimized().subscribe(comptables => this.comptables = comptables,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadProjet(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Facture', 'list');
        isPermistted ? this.projetService.findAllOptimized().subscribe(projets => this.projets = projets,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: FactureDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Libelle': e.libelle ,
                 'Montant': e.montant ,
                'Date emission': this.datePipe.transform(e.dateEmission , 'dd/MM/yyyy hh:mm'),
                'Date echeance': this.datePipe.transform(e.dateEcheance , 'dd/MM/yyyy hh:mm'),
                'Comptable': e.comptable?.code ,
                'Projet': e.projet?.code ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Montant Min': this.criteria.montantMin ? this.criteria.montantMin : environment.emptyForExport ,
            'Montant Max': this.criteria.montantMax ? this.criteria.montantMax : environment.emptyForExport ,
            'Date emission Min': this.criteria.dateEmissionFrom ? this.datePipe.transform(this.criteria.dateEmissionFrom , this.dateFormat) : environment.emptyForExport ,
            'Date emission Max': this.criteria.dateEmissionTo ? this.datePipe.transform(this.criteria.dateEmissionTo , this.dateFormat) : environment.emptyForExport ,
            'Date echeance Min': this.criteria.dateEcheanceFrom ? this.datePipe.transform(this.criteria.dateEcheanceFrom , this.dateFormat) : environment.emptyForExport ,
            'Date echeance Max': this.criteria.dateEcheanceTo ? this.datePipe.transform(this.criteria.dateEcheanceTo , this.dateFormat) : environment.emptyForExport ,
        //'Comptable': this.criteria.comptable?.code ? this.criteria.comptable?.code : environment.emptyForExport ,
        //'Projet': this.criteria.projet?.code ? this.criteria.projet?.code : environment.emptyForExport ,
        }];
      }
}
