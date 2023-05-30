import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {RemarqueService} from 'src/app/controller/service/Remarque.service';
import {RemarqueDto} from 'src/app/controller/model/Remarque.model';
import {RemarqueCriteria} from 'src/app/controller/criteria/RemarqueCriteria.model';

import {ProjetDto} from 'src/app/controller/model/Projet.model';
import {ProjetService} from 'src/app/controller/service/Projet.service';
@Component({
  selector: 'app-remarque-view-admin',
  templateUrl: './remarque-view-admin.component.html'
})
export class RemarqueViewAdminComponent extends AbstractViewController<RemarqueDto, RemarqueCriteria, RemarqueService> implements OnInit {


    constructor(private remarqueService: RemarqueService, private projetService: ProjetService){
        super(remarqueService);
    }

    ngOnInit(): void {
        this.projet = new ProjetDto();
        this.projetService.findAll().subscribe((data) => this.projets = data);
    }


    get projet(): ProjetDto {
       return this.projetService.item;
    }
    set projet(value: ProjetDto) {
        this.projetService.item = value;
    }
    get projets():Array<ProjetDto> {
       return this.projetService.items;
    }
    set projets(value: Array<ProjetDto>) {
        this.projetService.items = value;
    }


}
