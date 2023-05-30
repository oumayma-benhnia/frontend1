import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

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
  selector: 'app-projet-create-admin',
  templateUrl: './projet-create-admin.component.html'
})
export class ProjetCreateAdminComponent extends AbstractCreateController<ProjetDto, ProjetCriteria, ProjetService>  implements OnInit {

    private _projetRessourcesElement = new ProjetRessourceDto();
    private _tachesElement = new TacheDto();
    private _remarquesElement = new RemarqueDto();


   private _validProjetCode = true;
    private _validTypeProjetCode = true;
    private _validTypeProjetLibelle = true;
    private _validProjetRessourcesCode = true;
    private _validTachesCode = true;
    private _validClientCode = true;
    private _validChefProjetCode = true;
    private _validRemarquesCode = true;

    constructor( private projetService: ProjetService , private remarqueService: RemarqueService, private chefProjetService: ChefProjetService, private tacheService: TacheService, private typeProjetService: TypeProjetService, private ressourceService: RessourceService, private projetRessourceService: ProjetRessourceService, private clientService: ClientService, private collaborateurService: CollaborateurService) {
        super(projetService);
    }

    ngOnInit(): void {
        this.projetRessourcesElement.ressource = new RessourceDto();
        this.ressourceService.findAll().subscribe((data) => this.ressources = data);
        this.tachesElement.collaborateur = new CollaborateurDto();
        this.collaborateurService.findAll().subscribe((data) => this.collaborateurs = data);
    this.typeProjet = new TypeProjetDto();
    this.typeProjetService.findAll().subscribe((data) => this.typeProjets = data);
    this.client = new ClientDto();
    this.clientService.findAll().subscribe((data) => this.clients = data);
    this.chefProjet = new ChefProjetDto();
    this.chefProjetService.findAll().subscribe((data) => this.chefProjets = data);
}



    validateProjetRessources(){
        this.errorMessages = new Array();
        this.validateProjetRessourcesCode();
    }
    validateTaches(){
        this.errorMessages = new Array();
        this.validateTachesCode();
    }
    validateRemarques(){
        this.errorMessages = new Array();
        this.validateRemarquesCode();
    }


    public setValidation(value: boolean){
        this.validProjetCode = value;
        this.validProjetRessourcesCode = value;
        this.validTachesCode = value;
        this.validRemarquesCode = value;
    }

    public addProjetRessources() {
        if( this.item.projetRessources == null )
            this.item.projetRessources = new Array<ProjetRessourceDto>();
       this.validateProjetRessources();
       if (this.errorMessages.length === 0) {
              this.item.projetRessources.push({... this.projetRessourcesElement});
              this.projetRessourcesElement = new ProjetRessourceDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteProjetRessource(p: ProjetRessourceDto) {
        this.item.projetRessources.forEach((element, index) => {
            if (element === p) { this.item.projetRessources.splice(index, 1); }
        });
    }

    public editProjetRessource(p: ProjetRessourceDto) {
        this.projetRessourcesElement = {... p};
        this.activeTab = 0;
    }
    public addTaches() {
        if( this.item.taches == null )
            this.item.taches = new Array<TacheDto>();
       this.validateTaches();
       if (this.errorMessages.length === 0) {
              this.item.taches.push({... this.tachesElement});
              this.tachesElement = new TacheDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteTache(p: TacheDto) {
        this.item.taches.forEach((element, index) => {
            if (element === p) { this.item.taches.splice(index, 1); }
        });
    }

    public editTache(p: TacheDto) {
        this.tachesElement = {... p};
        this.activeTab = 0;
    }
    public addRemarques() {
        if( this.item.remarques == null )
            this.item.remarques = new Array<RemarqueDto>();
       this.validateRemarques();
       if (this.errorMessages.length === 0) {
              this.item.remarques.push({... this.remarquesElement});
              this.remarquesElement = new RemarqueDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteRemarque(p: RemarqueDto) {
        this.item.remarques.forEach((element, index) => {
            if (element === p) { this.item.remarques.splice(index, 1); }
        });
    }

    public editRemarque(p: RemarqueDto) {
        this.remarquesElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProjetCode();
    }

    public validateProjetCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validProjetCode = false;
        } else {
            this.validProjetCode = true;
        }
    }

    public validateProjetRessourcesCode(){
        if (this.projetRessourcesElement.code == null) {
            this.errorMessages.push('Code de la projetRessource est  invalide');
            this.validProjetRessourcesCode = false;
        } else {
            this.validProjetRessourcesCode = true;
        }
    }
    public validateTachesCode(){
        if (this.tachesElement.code == null) {
            this.errorMessages.push('Code de la tache est  invalide');
            this.validTachesCode = false;
        } else {
            this.validTachesCode = true;
        }
    }
    public validateRemarquesCode(){
        if (this.remarquesElement.code == null) {
            this.errorMessages.push('Code de la remarque est  invalide');
            this.validRemarquesCode = false;
        } else {
            this.validRemarquesCode = true;
        }
    }

    public async openCreateTypeProjet(typeProjet: string) {
    const isPermistted = await this.roleService.isPermitted('TypeProjet', 'add');
    if(isPermistted) {
         this.typeProjet = new TypeProjetDto();
         this.createTypeProjetDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateClient(client: string) {
    const isPermistted = await this.roleService.isPermitted('Client', 'add');
    if(isPermistted) {
         this.client = new ClientDto();
         this.createClientDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateChefProjet(chefProjet: string) {
    const isPermistted = await this.roleService.isPermitted('ChefProjet', 'add');
    if(isPermistted) {
         this.chefProjet = new ChefProjetDto();
         this.createChefProjetDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get typeProjet(): TypeProjetDto {
        return this.typeProjetService.item;
    }
    set typeProjet(value: TypeProjetDto) {
        this.typeProjetService.item = value;
    }
    get typeProjets(): Array<TypeProjetDto> {
        return this.typeProjetService.items;
    }
    set typeProjets(value: Array<TypeProjetDto>) {
        this.typeProjetService.items = value;
    }
    get createTypeProjetDialog(): boolean {
       return this.typeProjetService.createDialog;
    }
    set createTypeProjetDialog(value: boolean) {
        this.typeProjetService.createDialog= value;
    }
    get client(): ClientDto {
        return this.clientService.item;
    }
    set client(value: ClientDto) {
        this.clientService.item = value;
    }
    get clients(): Array<ClientDto> {
        return this.clientService.items;
    }
    set clients(value: Array<ClientDto>) {
        this.clientService.items = value;
    }
    get createClientDialog(): boolean {
       return this.clientService.createDialog;
    }
    set createClientDialog(value: boolean) {
        this.clientService.createDialog= value;
    }
    get ressource(): RessourceDto {
        return this.ressourceService.item;
    }
    set ressource(value: RessourceDto) {
        this.ressourceService.item = value;
    }
    get ressources(): Array<RessourceDto> {
        return this.ressourceService.items;
    }
    set ressources(value: Array<RessourceDto>) {
        this.ressourceService.items = value;
    }
    get createRessourceDialog(): boolean {
       return this.ressourceService.createDialog;
    }
    set createRessourceDialog(value: boolean) {
        this.ressourceService.createDialog= value;
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
    get chefProjet(): ChefProjetDto {
        return this.chefProjetService.item;
    }
    set chefProjet(value: ChefProjetDto) {
        this.chefProjetService.item = value;
    }
    get chefProjets(): Array<ChefProjetDto> {
        return this.chefProjetService.items;
    }
    set chefProjets(value: Array<ChefProjetDto>) {
        this.chefProjetService.items = value;
    }
    get createChefProjetDialog(): boolean {
       return this.chefProjetService.createDialog;
    }
    set createChefProjetDialog(value: boolean) {
        this.chefProjetService.createDialog= value;
    }



    get validProjetCode(): boolean {
        return this._validProjetCode;
    }

    set validProjetCode(value: boolean) {
         this._validProjetCode = value;
    }

    get validTypeProjetCode(): boolean {
        return this._validTypeProjetCode;
    }
    set validTypeProjetCode(value: boolean) {
        this._validTypeProjetCode = value;
    }
    get validTypeProjetLibelle(): boolean {
        return this._validTypeProjetLibelle;
    }
    set validTypeProjetLibelle(value: boolean) {
        this._validTypeProjetLibelle = value;
    }
    get validProjetRessourcesCode(): boolean {
        return this._validProjetRessourcesCode;
    }
    set validProjetRessourcesCode(value: boolean) {
        this._validProjetRessourcesCode = value;
    }
    get validTachesCode(): boolean {
        return this._validTachesCode;
    }
    set validTachesCode(value: boolean) {
        this._validTachesCode = value;
    }
    get validClientCode(): boolean {
        return this._validClientCode;
    }
    set validClientCode(value: boolean) {
        this._validClientCode = value;
    }
    get validChefProjetCode(): boolean {
        return this._validChefProjetCode;
    }
    set validChefProjetCode(value: boolean) {
        this._validChefProjetCode = value;
    }
    get validRemarquesCode(): boolean {
        return this._validRemarquesCode;
    }
    set validRemarquesCode(value: boolean) {
        this._validRemarquesCode = value;
    }

    get projetRessourcesElement(): ProjetRessourceDto {
        if( this._projetRessourcesElement == null )
            this._projetRessourcesElement = new ProjetRessourceDto();
        return this._projetRessourcesElement;
    }

    set projetRessourcesElement(value: ProjetRessourceDto) {
        this._projetRessourcesElement = value;
    }
    get tachesElement(): TacheDto {
        if( this._tachesElement == null )
            this._tachesElement = new TacheDto();
        return this._tachesElement;
    }

    set tachesElement(value: TacheDto) {
        this._tachesElement = value;
    }
    get remarquesElement(): RemarqueDto {
        if( this._remarquesElement == null )
            this._remarquesElement = new RemarqueDto();
        return this._remarquesElement;
    }

    set remarquesElement(value: RemarqueDto) {
        this._remarquesElement = value;
    }

}
