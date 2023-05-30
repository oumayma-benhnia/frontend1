import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {MoyenPaiementService} from 'src/app/controller/service/MoyenPaiement.service';
import {MoyenPaiementDto} from 'src/app/controller/model/MoyenPaiement.model';
import {MoyenPaiementCriteria} from 'src/app/controller/criteria/MoyenPaiementCriteria.model';



@Component({
  selector: 'app-moyen-paiement-edit-admin',
  templateUrl: './moyen-paiement-edit-admin.component.html'
})
export class MoyenPaiementEditAdminComponent extends AbstractEditController<MoyenPaiementDto, MoyenPaiementCriteria, MoyenPaiementService>   implements OnInit {


    private _validMoyenPaiementCode = true;




    constructor( private moyenPaiementService: MoyenPaiementService ) {
        super(moyenPaiementService);
    }

    ngOnInit(): void {
}
    public prepareEdit() {
        this.item.dateRemarque = this.moyenPaiementService.format(this.item.dateRemarque);
    }



    public setValidation(value : boolean){
        this.validMoyenPaiementCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateMoyenPaiementCode();
    }
    public validateMoyenPaiementCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validMoyenPaiementCode = false;
        } else {
            this.validMoyenPaiementCode = true;
        }
    }






    get validMoyenPaiementCode(): boolean {
        return this._validMoyenPaiementCode;
    }
    set validMoyenPaiementCode(value: boolean) {
        this._validMoyenPaiementCode = value;
    }

}
