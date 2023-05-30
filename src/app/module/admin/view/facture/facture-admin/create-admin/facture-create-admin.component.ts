import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FactureService} from 'src/app/controller/service/Facture.service';
import {FactureDto} from 'src/app/controller/model/Facture.model';
import {FactureCriteria} from 'src/app/controller/criteria/FactureCriteria.model';
import {ComptableDto} from 'src/app/controller/model/Comptable.model';
import {ComptableService} from 'src/app/controller/service/Comptable.service';
import {ProjetDto} from 'src/app/controller/model/Projet.model';
import {ProjetService} from 'src/app/controller/service/Projet.service';
@Component({
  selector: 'app-facture-create-admin',
  templateUrl: './facture-create-admin.component.html'
})
export class FactureCreateAdminComponent extends AbstractCreateController<FactureDto, FactureCriteria, FactureService>  implements OnInit {



   private _validFactureReference = true;
   private _validFactureLibelle = true;
    private _validComptableCode = true;
    private _validProjetCode = true;

    constructor( private factureService: FactureService , private comptableService: ComptableService, private projetService: ProjetService) {
        super(factureService);
    }

    ngOnInit(): void {
    this.comptable = new ComptableDto();
    this.comptableService.findAll().subscribe((data) => this.comptables = data);
    this.projet = new ProjetDto();
    this.projetService.findAll().subscribe((data) => this.projets = data);
}





    public setValidation(value: boolean){
        this.validFactureReference = value;
        this.validFactureLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFactureReference();
        this.validateFactureLibelle();
    }

    public validateFactureReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validFactureReference = false;
        } else {
            this.validFactureReference = true;
        }
    }
    public validateFactureLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validFactureLibelle = false;
        } else {
            this.validFactureLibelle = true;
        }
    }


    public async openCreateComptable(comptable: string) {
    const isPermistted = await this.roleService.isPermitted('Comptable', 'add');
    if(isPermistted) {
         this.comptable = new ComptableDto();
         this.createComptableDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get comptable(): ComptableDto {
        return this.comptableService.item;
    }
    set comptable(value: ComptableDto) {
        this.comptableService.item = value;
    }
    get comptables(): Array<ComptableDto> {
        return this.comptableService.items;
    }
    set comptables(value: Array<ComptableDto>) {
        this.comptableService.items = value;
    }
    get createComptableDialog(): boolean {
       return this.comptableService.createDialog;
    }
    set createComptableDialog(value: boolean) {
        this.comptableService.createDialog= value;
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



    get validFactureReference(): boolean {
        return this._validFactureReference;
    }

    set validFactureReference(value: boolean) {
         this._validFactureReference = value;
    }
    get validFactureLibelle(): boolean {
        return this._validFactureLibelle;
    }

    set validFactureLibelle(value: boolean) {
         this._validFactureLibelle = value;
    }

    get validComptableCode(): boolean {
        return this._validComptableCode;
    }
    set validComptableCode(value: boolean) {
        this._validComptableCode = value;
    }
    get validProjetCode(): boolean {
        return this._validProjetCode;
    }
    set validProjetCode(value: boolean) {
        this._validProjetCode = value;
    }


}
