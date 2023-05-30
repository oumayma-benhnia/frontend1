import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EntiteAdministrativeService} from 'src/app/controller/service/EntiteAdministrative.service';
import {EntiteAdministrativeDto} from 'src/app/controller/model/EntiteAdministrative.model';
import {EntiteAdministrativeCriteria} from 'src/app/controller/criteria/EntiteAdministrativeCriteria.model';

@Component({
  selector: 'app-entite-administrative-view-admin',
  templateUrl: './entite-administrative-view-admin.component.html'
})
export class EntiteAdministrativeViewAdminComponent extends AbstractViewController<EntiteAdministrativeDto, EntiteAdministrativeCriteria, EntiteAdministrativeService> implements OnInit {


    constructor(private entiteAdministrativeService: EntiteAdministrativeService){
        super(entiteAdministrativeService);
    }

    ngOnInit(): void {
    }




}
