import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {PaiementService} from 'src/app/controller/service/Paiement.service';
import {PaiementDto} from 'src/app/controller/model/Paiement.model';
import {PaiementCriteria} from 'src/app/controller/criteria/PaiementCriteria.model';


import {MoyenPaiementDto} from 'src/app/controller/model/MoyenPaiement.model';
import {MoyenPaiementService} from 'src/app/controller/service/MoyenPaiement.service';
import {FactureDto} from 'src/app/controller/model/Facture.model';
import {FactureService} from 'src/app/controller/service/Facture.service';

@Component({
  selector: 'app-paiement-edit-admin',
  templateUrl: './paiement-edit-admin.component.html'
})
export class PaiementEditAdminComponent extends AbstractEditController<PaiementDto, PaiementCriteria, PaiementService>   implements OnInit {


    private _validPaiementCode = true;

    private _validFactureReference = true;
    private _validFactureLibelle = true;
    private _validMoyenPaiementCode = true;



    constructor( private paiementService: PaiementService , private moyenPaiementService: MoyenPaiementService, private factureService: FactureService) {
        super(paiementService);
    }

    ngOnInit(): void {
    this.facture = new FactureDto();
    this.factureService.findAll().subscribe((data) => this.factures = data);
    this.moyenPaiement = new MoyenPaiementDto();
    this.moyenPaiementService.findAll().subscribe((data) => this.moyenPaiements = data);
}
    public prepareEdit() {
        this.item.datePaiement = this.paiementService.format(this.item.datePaiement);
    }



    public setValidation(value : boolean){
        this.validPaiementCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaiementCode();
    }
    public validatePaiementCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validPaiementCode = false;
        } else {
            this.validPaiementCode = true;
        }
    }



   public async openCreateFacture(facture: string) {
        const isPermistted = await this.roleService.isPermitted('Facture', 'edit');
        if(isPermistted) {
             this.facture = new FactureDto();
             this.createFactureDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateMoyenPaiement(moyenPaiement: string) {
        const isPermistted = await this.roleService.isPermitted('MoyenPaiement', 'edit');
        if(isPermistted) {
             this.moyenPaiement = new MoyenPaiementDto();
             this.createMoyenPaiementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get facture(): FactureDto {
       return this.factureService.item;
   }
  set facture(value: FactureDto) {
        this.factureService.item = value;
   }
   get factures(): Array<FactureDto> {
        return this.factureService.items;
   }
   set factures(value: Array<FactureDto>) {
        this.factureService.items = value;
   }
   get createFactureDialog(): boolean {
       return this.factureService.createDialog;
   }
  set createFactureDialog(value: boolean) {
       this.factureService.createDialog= value;
   }
   get moyenPaiement(): MoyenPaiementDto {
       return this.moyenPaiementService.item;
   }
  set moyenPaiement(value: MoyenPaiementDto) {
        this.moyenPaiementService.item = value;
   }
   get moyenPaiements(): Array<MoyenPaiementDto> {
        return this.moyenPaiementService.items;
   }
   set moyenPaiements(value: Array<MoyenPaiementDto>) {
        this.moyenPaiementService.items = value;
   }
   get createMoyenPaiementDialog(): boolean {
       return this.moyenPaiementService.createDialog;
   }
  set createMoyenPaiementDialog(value: boolean) {
       this.moyenPaiementService.createDialog= value;
   }


    get validPaiementCode(): boolean {
        return this._validPaiementCode;
    }
    set validPaiementCode(value: boolean) {
        this._validPaiementCode = value;
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
    get validMoyenPaiementCode(): boolean {
        return this._validMoyenPaiementCode;
    }
    set validMoyenPaiementCode(value: boolean) {
        this._validMoyenPaiementCode = value;
    }
}
