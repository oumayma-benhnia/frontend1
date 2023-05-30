import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CategorieMaterielService} from 'src/app/controller/service/CategorieMateriel.service';
import {CategorieMaterielDto} from 'src/app/controller/model/CategorieMateriel.model';
import {CategorieMaterielCriteria} from 'src/app/controller/criteria/CategorieMaterielCriteria.model';

@Component({
  selector: 'app-categorie-materiel-view-admin',
  templateUrl: './categorie-materiel-view-admin.component.html'
})
export class CategorieMaterielViewAdminComponent extends AbstractViewController<CategorieMaterielDto, CategorieMaterielCriteria, CategorieMaterielService> implements OnInit {


    constructor(private categorieMaterielService: CategorieMaterielService){
        super(categorieMaterielService);
    }

    ngOnInit(): void {
    }




}
