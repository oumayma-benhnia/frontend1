import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ProjetRessourceService} from 'src/app/controller/service/ProjetRessource.service';
import {ProjetRessourceDto} from 'src/app/controller/model/ProjetRessource.model';
import {ProjetRessourceCriteria} from 'src/app/controller/criteria/ProjetRessourceCriteria.model';
import {ProjetDto} from 'src/app/controller/model/Projet.model';
import {ProjetService} from 'src/app/controller/service/Projet.service';
import {RessourceDto} from 'src/app/controller/model/Ressource.model';
import {RessourceService} from 'src/app/controller/service/Ressource.service';
@Component({
  selector: 'app-projet-ressource-create-admin',
  templateUrl: './projet-ressource-create-admin.component.html'
})
export class ProjetRessourceCreateAdminComponent extends AbstractCreateController<ProjetRessourceDto, ProjetRessourceCriteria, ProjetRessourceService>  implements OnInit {



   private _validProjetRessourceCode = true;
    private _validRessourceCode = true;
    private _validProjetCode = true;

    constructor( private projetRessourceService: ProjetRessourceService , private projetService: ProjetService, private ressourceService: RessourceService) {
        super(projetRessourceService);
    }

    ngOnInit(): void {
    this.ressource = new RessourceDto();
    this.ressourceService.findAll().subscribe((data) => this.ressources = data);
    this.projet = new ProjetDto();
    this.projetService.findAll().subscribe((data) => this.projets = data);
}





    public setValidation(value: boolean){
        this.validProjetRessourceCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProjetRessourceCode();
    }

    public validateProjetRessourceCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validProjetRessourceCode = false;
        } else {
            this.validProjetRessourceCode = true;
        }
    }


    public async openCreateRessource(ressource: string) {
    const isPermistted = await this.roleService.isPermitted('Ressource', 'add');
    if(isPermistted) {
         this.ressource = new RessourceDto();
         this.createRessourceDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get projet(): ProjetDto {
        return this.projetService.item;
    }
    set projet(value: ProjetDto) {
        this.projetService.item = value;
    }
    get projets(): Array<ProjetDto> {
        return this.projetService.items;
    }
    set projets(value: Array<ProjetDto>) {
        this.projetService.items = value;
    }
    get createProjetDialog(): boolean {
       return this.projetService.createDialog;
    }
    set createProjetDialog(value: boolean) {
        this.projetService.createDialog= value;
    }



    get validProjetRessourceCode(): boolean {
        return this._validProjetRessourceCode;
    }

    set validProjetRessourceCode(value: boolean) {
         this._validProjetRessourceCode = value;
    }

    get validRessourceCode(): boolean {
        return this._validRessourceCode;
    }
    set validRessourceCode(value: boolean) {
        this._validRessourceCode = value;
    }
    get validProjetCode(): boolean {
        return this._validProjetCode;
    }
    set validProjetCode(value: boolean) {
        this._validProjetCode = value;
    }


}
