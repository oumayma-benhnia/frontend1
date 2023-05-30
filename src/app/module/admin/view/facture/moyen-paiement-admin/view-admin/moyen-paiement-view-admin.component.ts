import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {MoyenPaiementService} from 'src/app/controller/service/MoyenPaiement.service';
import {MoyenPaiementDto} from 'src/app/controller/model/MoyenPaiement.model';
import {MoyenPaiementCriteria} from 'src/app/controller/criteria/MoyenPaiementCriteria.model';

@Component({
  selector: 'app-moyen-paiement-view-admin',
  templateUrl: './moyen-paiement-view-admin.component.html'
})
export class MoyenPaiementViewAdminComponent extends AbstractViewController<MoyenPaiementDto, MoyenPaiementCriteria, MoyenPaiementService> implements OnInit {


    constructor(private moyenPaiementService: MoyenPaiementService){
        super(moyenPaiementService);
    }

    ngOnInit(): void {
    }




}
