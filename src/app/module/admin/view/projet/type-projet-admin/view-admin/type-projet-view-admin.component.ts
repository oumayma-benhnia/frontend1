import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeProjetService} from 'src/app/controller/service/TypeProjet.service';
import {TypeProjetDto} from 'src/app/controller/model/TypeProjet.model';
import {TypeProjetCriteria} from 'src/app/controller/criteria/TypeProjetCriteria.model';

@Component({
  selector: 'app-type-projet-view-admin',
  templateUrl: './type-projet-view-admin.component.html'
})
export class TypeProjetViewAdminComponent extends AbstractViewController<TypeProjetDto, TypeProjetCriteria, TypeProjetService> implements OnInit {


    constructor(private typeProjetService: TypeProjetService){
        super(typeProjetService);
    }

    ngOnInit(): void {
    }




}
