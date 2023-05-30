import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ComptableService} from 'src/app/controller/service/Comptable.service';
import {ComptableDto} from 'src/app/controller/model/Comptable.model';
import {ComptableCriteria} from 'src/app/controller/criteria/ComptableCriteria.model';

@Component({
  selector: 'app-comptable-view-admin',
  templateUrl: './comptable-view-admin.component.html'
})
export class ComptableViewAdminComponent extends AbstractViewController<ComptableDto, ComptableCriteria, ComptableService> implements OnInit {


    constructor(private comptableService: ComptableService){
        super(comptableService);
    }

    ngOnInit(): void {
    }




}
