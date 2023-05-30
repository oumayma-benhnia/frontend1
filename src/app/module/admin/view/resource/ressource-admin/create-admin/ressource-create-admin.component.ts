import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

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
  selector: 'app-ressource-create-admin',
  templateUrl: './ressource-create-admin.component.html'
})
export class RessourceCreateAdminComponent extends AbstractCreateController<RessourceDto, RessourceCriteria, RessourceService>  implements OnInit {



   private _validRessourceCode = true;
    private _validFournisseurCode = true;
    private _validMaterielLibelle = true;
    private _validMaterielReference = true;
    private _validCollaborateurCode = true;
    private _validEntiteAdministrativeCode = true;
    private _validEntiteAdministrativeLibelle = true;

    constructor( private ressourceService: RessourceService , private fournisseurService: FournisseurService, private materielService: MaterielService, private entiteAdministrativeService: EntiteAdministrativeService, private collaborateurService: CollaborateurService) {
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





    public setValidation(value: boolean){
        this.validRessourceCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateRessourceCode();
    }

    public validateRessourceCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validRessourceCode = false;
        } else {
            this.validRessourceCode = true;
        }
    }



    get entiteAdministrative(): EntiteAdministrativeDto {
        return this.entiteAdministrativeService.item;
    }
    set entiteAdministrative(value: EntiteAdministrativeDto) {
        this.entiteAdministrativeService.item = value;
    }
    get entiteAdministratives(): Array<EntiteAdministrativeDto> {
        return this.entiteAdministrativeService.items;
    }
    set entiteAdministratives(value: Array<EntiteAdministrativeDto>) {
        this.entiteAdministrativeService.items = value;
    }
    get createEntiteAdministrativeDialog(): boolean {
       return this.entiteAdministrativeService.createDialog;
    }
    set createEntiteAdministrativeDialog(value: boolean) {
        this.entiteAdministrativeService.createDialog= value;
    }
    get materiel(): MaterielDto {
        return this.materielService.item;
    }
    set materiel(value: MaterielDto) {
        this.materielService.item = value;
    }
    get materiels(): Array<MaterielDto> {
        return this.materielService.items;
    }
    set materiels(value: Array<MaterielDto>) {
        this.materielService.items = value;
    }
    get createMaterielDialog(): boolean {
       return this.materielService.createDialog;
    }
    set createMaterielDialog(value: boolean) {
        this.materielService.createDialog= value;
    }
    get collaborateur(): CollaborateurDto {
        return this.collaborateurService.item;
    }
    set collaborateur(value: CollaborateurDto) {
        this.collaborateurService.item = value;
    }
    get collaborateurs(): Array<CollaborateurDto> {
        return this.collaborateurService.items;
    }
    set collaborateurs(value: Array<CollaborateurDto>) {
        this.collaborateurService.items = value;
    }
    get createCollaborateurDialog(): boolean {
       return this.collaborateurService.createDialog;
    }
    set createCollaborateurDialog(value: boolean) {
        this.collaborateurService.createDialog= value;
    }
    get fournisseur(): FournisseurDto {
        return this.fournisseurService.item;
    }
    set fournisseur(value: FournisseurDto) {
        this.fournisseurService.item = value;
    }
    get fournisseurs(): Array<FournisseurDto> {
        return this.fournisseurService.items;
    }
    set fournisseurs(value: Array<FournisseurDto>) {
        this.fournisseurService.items = value;
    }
    get createFournisseurDialog(): boolean {
       return this.fournisseurService.createDialog;
    }
    set createFournisseurDialog(value: boolean) {
        this.fournisseurService.createDialog= value;
    }



    get validRessourceCode(): boolean {
        return this._validRessourceCode;
    }

    set validRessourceCode(value: boolean) {
         this._validRessourceCode = value;
    }

    get validFournisseurCode(): boolean {
        return this._validFournisseurCode;
    }
    set validFournisseurCode(value: boolean) {
        this._validFournisseurCode = value;
    }
    get validMaterielLibelle(): boolean {
        return this._validMaterielLibelle;
    }
    set validMaterielLibelle(value: boolean) {
        this._validMaterielLibelle = value;
    }
    get validMaterielReference(): boolean {
        return this._validMaterielReference;
    }
    set validMaterielReference(value: boolean) {
        this._validMaterielReference = value;
    }
    get validCollaborateurCode(): boolean {
        return this._validCollaborateurCode;
    }
    set validCollaborateurCode(value: boolean) {
        this._validCollaborateurCode = value;
    }
    get validEntiteAdministrativeCode(): boolean {
        return this._validEntiteAdministrativeCode;
    }
    set validEntiteAdministrativeCode(value: boolean) {
        this._validEntiteAdministrativeCode = value;
    }
    get validEntiteAdministrativeLibelle(): boolean {
        return this._validEntiteAdministrativeLibelle;
    }
    set validEntiteAdministrativeLibelle(value: boolean) {
        this._validEntiteAdministrativeLibelle = value;
    }


}
