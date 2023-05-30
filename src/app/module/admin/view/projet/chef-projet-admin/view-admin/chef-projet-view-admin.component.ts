import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ChefProjetService} from 'src/app/controller/service/ChefProjet.service';
import {ChefProjetDto} from 'src/app/controller/model/ChefProjet.model';
import {ChefProjetCriteria} from 'src/app/controller/criteria/ChefProjetCriteria.model';

@Component({
  selector: 'app-chef-projet-view-admin',
  templateUrl: './chef-projet-view-admin.component.html'
})
export class ChefProjetViewAdminComponent extends AbstractViewController<ChefProjetDto, ChefProjetCriteria, ChefProjetService> implements OnInit {


    constructor(private chefProjetService: ChefProjetService){
        super(chefProjetService);
    }

    ngOnInit(): void {
    }




}
