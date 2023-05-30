import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ComptableService} from 'src/app/controller/service/Comptable.service';
import {ComptableDto} from 'src/app/controller/model/Comptable.model';
import {ComptableCriteria} from 'src/app/controller/criteria/ComptableCriteria.model';



@Component({
  selector: 'app-comptable-edit-admin',
  templateUrl: './comptable-edit-admin.component.html'
})
export class ComptableEditAdminComponent extends AbstractEditController<ComptableDto, ComptableCriteria, ComptableService>   implements OnInit {


    private _validComptableCode = true;




    constructor( private comptableService: ComptableService ) {
        super(comptableService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
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
