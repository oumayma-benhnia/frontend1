import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ProjetService} from 'src/app/controller/service/Projet.service';
import {ProjetDto} from 'src/app/controller/model/Projet.model';
import {ProjetCriteria} from 'src/app/controller/criteria/ProjetCriteria.model';

import {RemarqueDto} from 'src/app/controller/model/Remarque.model';
import {RemarqueService} from 'src/app/controller/service/Remarque.service';
import {TypeProjetDto} from 'src/app/controller/model/TypeProjet.model';
import {TypeProjetService} from 'src/app/controller/service/TypeProjet.service';
import {RessourceDto} from 'src/app/controller/model/Ressource.model';
import {RessourceService} from 'src/app/controller/service/Ressource.service';
import {ProjetRessourceDto} from 'src/app/controller/model/ProjetRessource.model';
import {ProjetRessourceService} from 'src/app/controller/service/ProjetRessource.service';
import {ClientDto} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';
import {ChefProjetDto} from 'src/app/controller/model/ChefProjet.model';
import {ChefProjetService} from 'src/app/controller/service/ChefProjet.service';
import {TacheDto} from 'src/app/controller/model/Tache.model';
import {TacheService} from 'src/app/controller/service/Tache.service';
import {CollaborateurDto} from 'src/app/controller/model/Collaborateur.model';
import {CollaborateurService} from 'src/app/controller/service/Collaborateur.service';
@Component({
  selector: 'app-projet-view-admin',
  templateUrl: './projet-view-admin.component.html'
})
export class ProjetViewAdminComponent extends AbstractViewController<ProjetDto, ProjetCriteria, ProjetService> implements OnInit {

    projetRessources = new ProjetRessourceDto();
    projetRessourcess: Array<ProjetRessourceDto> = [];
    taches = new TacheDto();
    tachess: Array<TacheDto> = [];
    remarques = new RemarqueDto();
    remarquess: Array<RemarqueDto> = [];

    constructor(private projetService: ProjetService, private remarqueService: RemarqueService, private chefProjetService: ChefProjetService, private tacheService: TacheService, private typeProjetService: TypeProjetService, private ressourceService: RessourceService, private projetRessourceService: ProjetRessourceService, private clientService: ClientService, private collaborateurService: CollaborateurService){
        super(projetService);
    }

    ngOnInit(): void {
        this.projetRessources.ressource = new RessourceDto();
        this.ressourceService.findAll().subscribe((data) => this.ressources = data);
        this.taches.collaborateur = new CollaborateurDto();
        this.collaborateurService.findAll().subscribe((data) => this.collaborateurs = data);
        this.typeProjet = new TypeProjetDto();
        this.typeProjetService.findAll().subscribe((data) => this.typeProjets = data);
        this.client = new ClientDto();
        this.clientService.findAll().subscribe((data) => this.clients = data);
        this.chefProjet = new ChefProjetDto();
        this.chefProjetService.findAll().subscribe((data) => this.chefProjets = data);
    }


    get typeProjet(): TypeProjetDto {
       return this.typeProjetService.item;
    }
    set typeProjet(value: TypeProjetDto) {
        this.typeProjetService.item = value;
    }
    get typeProjets():Array<TypeProjetDto> {
       return this.typeProjetService.items;
    }
    set typeProjets(value: Array<TypeProjetDto>) {
        this.typeProjetService.items = value;
    }
    get client(): ClientDto {
       return this.clientService.item;
    }
    set client(value: ClientDto) {
        this.clientService.item = value;
    }
    get clients():Array<ClientDto> {
       return this.clientService.items;
    }
    set clients(value: Array<ClientDto>) {
        this.clientService.items = value;
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
    get chefProjet(): ChefProjetDto {
       return this.chefProjetService.item;
    }
    set chefProjet(value: ChefProjetDto) {
        this.chefProjetService.item = value;
    }
    get chefProjets():Array<ChefProjetDto> {
       return this.chefProjetService.items;
    }
    set chefProjets(value: Array<ChefProjetDto>) {
        this.chefProjetService.items = value;
    }


}
