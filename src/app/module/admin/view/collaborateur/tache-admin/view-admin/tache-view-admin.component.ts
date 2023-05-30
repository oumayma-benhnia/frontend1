import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TacheService} from 'src/app/controller/service/Tache.service';
import {TacheDto} from 'src/app/controller/model/Tache.model';
import {TacheCriteria} from 'src/app/controller/criteria/TacheCriteria.model';

import {CollaborateurDto} from 'src/app/controller/model/Collaborateur.model';
import {CollaborateurService} from 'src/app/controller/service/Collaborateur.service';
@Component({
  selector: 'app-tache-view-admin',
  templateUrl: './tache-view-admin.component.html'
})
export class TacheViewAdminComponent extends AbstractViewController<TacheDto, TacheCriteria, TacheService> implements OnInit {


    constructor(private tacheService: TacheService, private collaborateurService: CollaborateurService){
        super(tacheService);
    }

    ngOnInit(): void {
        this.collaborateur = new CollaborateurDto();
        this.collaborateurService.findAll().subscribe((data) => this.collaborateurs = data);
    }


    get collaborateur(): CollaborateurDto {
       return this.collaborateurService.item;
    }
    set collaborateur(value: CollaborateurDto) {
        this.collaborateurService.item = value;
    }
    get collaborateurs():Array<CollaborateurDto> {
       return this.collaborateurService.items;
    }
    set collaborateurs(value: Array<CollaborateurDto>) {
        this.collaborateurService.items = value;
    }


}
