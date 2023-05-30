import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FournisseurService} from 'src/app/controller/service/Fournisseur.service';
import {FournisseurDto} from 'src/app/controller/model/Fournisseur.model';
import {FournisseurCriteria} from 'src/app/controller/criteria/FournisseurCriteria.model';

@Component({
  selector: 'app-fournisseur-view-admin',
  templateUrl: './fournisseur-view-admin.component.html'
})
export class FournisseurViewAdminComponent extends AbstractViewController<FournisseurDto, FournisseurCriteria, FournisseurService> implements OnInit {


    constructor(private fournisseurService: FournisseurService){
        super(fournisseurService);
    }

    ngOnInit(): void {
    }




}
