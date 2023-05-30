import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FactureService} from 'src/app/controller/service/Facture.service';
import {FactureDto} from 'src/app/controller/model/Facture.model';
import {FactureCriteria} from 'src/app/controller/criteria/FactureCriteria.model';

import {ComptableDto} from 'src/app/controller/model/Comptable.model';
import {ComptableService} from 'src/app/controller/service/Comptable.service';
import {ProjetDto} from 'src/app/controller/model/Projet.model';
import {ProjetService} from 'src/app/controller/service/Projet.service';
@Component({
  selector: 'app-facture-view-admin',
  templateUrl: './facture-view-admin.component.html'
})
export class FactureViewAdminComponent extends AbstractViewController<FactureDto, FactureCriteria, FactureService> implements OnInit {


    constructor(private factureService: FactureService, private comptableService: ComptableService, private projetService: ProjetService){
        super(factureService);
    }

    ngOnInit(): void {
        this.comptable = new ComptableDto();
        this.comptableService.findAll().subscribe((data) => this.comptables = data);
        this.projet = new ProjetDto();
        this.projetService.findAll().subscribe((data) => this.projets = data);
    }


    get comptable(): ComptableDto {
       return this.comptableService.item;
    }
    set comptable(value: ComptableDto) {
        this.comptableService.item = value;
    }
    get comptables():Array<ComptableDto> {
       return this.comptableService.items;
    }
    set comptables(value: Array<ComptableDto>) {
        this.comptableService.items = value;
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
