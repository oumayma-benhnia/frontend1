import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ComptableService} from 'src/app/controller/service/Comptable.service';
import {ComptableDto} from 'src/app/controller/model/Comptable.model';
import {ComptableCriteria} from 'src/app/controller/criteria/ComptableCriteria.model';
@Component({
  selector: 'app-comptable-create-admin',
  templateUrl: './comptable-create-admin.component.html'
})
export class ComptableCreateAdminComponent extends AbstractCreateController<ComptableDto, ComptableCriteria, ComptableService>  implements OnInit {



   private _validComptableCode = true;

    constructor( private comptableService: ComptableService ) {
        super(comptableService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validComptableCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateComptableCode();
    }

    public validateComptableCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validComptableCode = false;
        } else {
            this.validComptableCode = true;
        }
    }






    get validComptableCode(): boolean {
        return this._validComptableCode;
    }

    set validComptableCode(value: boolean) {
         this._validComptableCode = value;
    }



}
