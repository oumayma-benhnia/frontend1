import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ProjetRessourceService} from 'src/app/controller/service/ProjetRessource.service';
import {ProjetRessourceDto} from 'src/app/controller/model/ProjetRessource.model';
import {ProjetRessourceCriteria} from 'src/app/controller/criteria/ProjetRessourceCriteria.model';

import {ProjetDto} from 'src/app/controller/model/Projet.model';
import {ProjetService} from 'src/app/controller/service/Projet.service';
import {RessourceDto} from 'src/app/controller/model/Ressource.model';
import {RessourceService} from 'src/app/controller/service/Ressource.service';
@Component({
  selector: 'app-projet-ressource-view-admin',
  templateUrl: './projet-ressource-view-admin.component.html'
})
export class ProjetRessourceViewAdminComponent extends AbstractViewController<ProjetRessourceDto, ProjetRessourceCriteria, ProjetRessourceService> implements OnInit {


    constructor(private projetRessourceService: ProjetRessourceService, private projetService: ProjetService, private ressourceService: RessourceService){
        super(projetRessourceService);
    }

    ngOnInit(): void {
        this.ressource = new RessourceDto();
        this.ressourceService.findAll().subscribe((data) => this.ressources = data);
        this.projet = new ProjetDto();
        this.projetService.findAll().subscribe((data) => this.projets = data);
    }


    get ressource(): RessourceDto {
       return this.ressourceService.item;
    }
    set ressource(value: RessourceDto) {
        this.ressourceService.item = value;
    }
    get ressources():Array<RessourceDto> {
       return this.ressourceService.items;
    }
    set ressources(value: Array<RessourceDto>) {
        this.ressourceService.items = value;
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
