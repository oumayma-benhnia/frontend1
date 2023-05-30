import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FournisseurService} from 'src/app/controller/service/Fournisseur.service';
import {FournisseurDto} from 'src/app/controller/model/Fournisseur.model';
import {FournisseurCriteria} from 'src/app/controller/criteria/FournisseurCriteria.model';
@Component({
  selector: 'app-fournisseur-create-admin',
  templateUrl: './fournisseur-create-admin.component.html'
})
export class FournisseurCreateAdminComponent extends AbstractCreateController<FournisseurDto, FournisseurCriteria, FournisseurService>  implements OnInit {



   private _validFournisseurCode = true;

    constructor( private fournisseurService: FournisseurService ) {
        super(fournisseurService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validFournisseurCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFournisseurCode();
    }

    public validateFournisseurCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validFournisseurCode = false;
        } else {
            this.validFournisseurCode = true;
        }
    }






    get validFournisseurCode(): boolean {
        return this._validFournisseurCode;
    }

    set validFournisseurCode(value: boolean) {
         this._validFournisseurCode = value;
    }



}
