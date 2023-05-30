import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CollaborateurService} from 'src/app/controller/service/Collaborateur.service';
import {CollaborateurDto} from 'src/app/controller/model/Collaborateur.model';
import {CollaborateurCriteria} from 'src/app/controller/criteria/CollaborateurCriteria.model';

@Component({
  selector: 'app-collaborateur-view-admin',
  templateUrl: './collaborateur-view-admin.component.html'
})
export class CollaborateurViewAdminComponent extends AbstractViewController<CollaborateurDto, CollaborateurCriteria, CollaborateurService> implements OnInit {


    constructor(private collaborateurService: CollaborateurService){
        super(collaborateurService);
    }

    ngOnInit(): void {
    }




}
