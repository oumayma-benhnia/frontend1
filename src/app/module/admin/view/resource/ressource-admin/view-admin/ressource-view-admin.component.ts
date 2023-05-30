import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {RessourceService} from 'src/app/controller/service/Ressource.service';
import {RessourceDto} from 'src/app/controller/model/Ressource.model';
import {RessourceCriteria} from 'src/app/controller/criteria/RessourceCriteria.model';

import {FournisseurDto} from 'src/app/controller/model/Fournisseur.model';
import {FournisseurService} from 'src/app/controller/service/Fournisseur.service';
import {MaterielDto} from 'src/app/controller/model/Materiel.model';
import {MaterielService} from 'src/app/controller/service/Materiel.service';
import {EntiteAdministrativeDto} from 'src/app/controller/model/EntiteAdministrative.model';
import {EntiteAdministrativeService} from 'src/app/controller/service/EntiteAdministrative.service';
import {CollaborateurDto} from 'src/app/controller/model/Collaborateur.model';
import {CollaborateurService} from 'src/app/controller/service/Collaborateur.service';
@Component({
  selector: 'app-ressource-view-admin',
  templateUrl: './ressource-view-admin.component.html'
})
export class RessourceViewAdminComponent extends AbstractViewController<RessourceDto, RessourceCriteria, RessourceService> implements OnInit {


    constructor(private ressourceService: RessourceService, private fournisseurService: FournisseurService, private materielService: MaterielService, private entiteAdministrativeService: EntiteAdministrativeService, private collaborateurService: CollaborateurService){
        super(ressourceService);
    }

    ngOnInit(): void {
        this.fournisseur = new FournisseurDto();
        this.fournisseurService.findAll().subscribe((data) => this.fournisseurs = data);
        this.materiel = new MaterielDto();
        this.materielService.findAll().subscribe((data) => this.materiels = data);
        this.collaborateur = new CollaborateurDto();
        this.collaborateurService.findAll().subscribe((data) => this.collaborateurs = data);
        this.entiteAdministrative = new EntiteAdministrativeDto();
        this.entiteAdministrativeService.findAll().subscribe((data) => this.entiteAdministratives = data);
    }


    get entiteAdministrative(): EntiteAdministrativeDto {
       return this.entiteAdministrativeService.item;
    }
    set entiteAdministrative(value: EntiteAdministrativeDto) {
        this.entiteAdministrativeService.item = value;
    }
    get entiteAdministratives():Array<EntiteAdministrativeDto> {
       return this.entiteAdministrativeService.items;
    }
    set entiteAdministratives(value: Array<EntiteAdministrativeDto>) {
        this.entiteAdministrativeService.items = value;
    }
    get materiel(): MaterielDto {
       return this.materielService.item;
    }
    set materiel(value: MaterielDto) {
        this.materielService.item = value;
    }
    get materiels():Array<MaterielDto> {
       return this.materielService.items;
    }
    set materiels(value: Array<MaterielDto>) {
        this.materielService.items = value;
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
    get fournisseur(): FournisseurDto {
       return this.fournisseurService.item;
    }
    set fournisseur(value: FournisseurDto) {
        this.fournisseurService.item = value;
    }
    get fournisseurs():Array<FournisseurDto> {
       return this.fournisseurService.items;
    }
    set fournisseurs(value: Array<FournisseurDto>) {
        this.fournisseurService.items = value;
    }


}
