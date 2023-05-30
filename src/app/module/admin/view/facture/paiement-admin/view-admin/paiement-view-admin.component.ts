import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PaiementService} from 'src/app/controller/service/Paiement.service';
import {PaiementDto} from 'src/app/controller/model/Paiement.model';
import {PaiementCriteria} from 'src/app/controller/criteria/PaiementCriteria.model';

import {MoyenPaiementDto} from 'src/app/controller/model/MoyenPaiement.model';
import {MoyenPaiementService} from 'src/app/controller/service/MoyenPaiement.service';
import {FactureDto} from 'src/app/controller/model/Facture.model';
import {FactureService} from 'src/app/controller/service/Facture.service';
@Component({
  selector: 'app-paiement-view-admin',
  templateUrl: './paiement-view-admin.component.html'
})
export class PaiementViewAdminComponent extends AbstractViewController<PaiementDto, PaiementCriteria, PaiementService> implements OnInit {


    constructor(private paiementService: PaiementService, private moyenPaiementService: MoyenPaiementService, private factureService: FactureService){
        super(paiementService);
    }

    ngOnInit(): void {
        this.facture = new FactureDto();
        this.factureService.findAll().subscribe((data) => this.factures = data);
        this.moyenPaiement = new MoyenPaiementDto();
        this.moyenPaiementService.findAll().subscribe((data) => this.moyenPaiements = data);
    }


    get facture(): FactureDto {
       return this.factureService.item;
    }
    set facture(value: FactureDto) {
        this.factureService.item = value;
    }
    get factures():Array<FactureDto> {
       return this.factureService.items;
    }
    set factures(value: Array<FactureDto>) {
        this.factureService.items = value;
    }
    get moyenPaiement(): MoyenPaiementDto {
       return this.moyenPaiementService.item;
    }
    set moyenPaiement(value: MoyenPaiementDto) {
        this.moyenPaiementService.item = value;
    }
    get moyenPaiements():Array<MoyenPaiementDto> {
       return this.moyenPaiementService.items;
    }
    set moyenPaiements(value: Array<MoyenPaiementDto>) {
        this.moyenPaiementService.items = value;
    }


}
