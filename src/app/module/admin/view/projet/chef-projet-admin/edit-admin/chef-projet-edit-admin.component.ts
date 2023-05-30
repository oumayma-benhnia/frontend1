import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ChefProjetService} from 'src/app/controller/service/ChefProjet.service';
import {ChefProjetDto} from 'src/app/controller/model/ChefProjet.model';
import {ChefProjetCriteria} from 'src/app/controller/criteria/ChefProjetCriteria.model';



@Component({
  selector: 'app-chef-projet-edit-admin',
  templateUrl: './chef-projet-edit-admin.component.html'
})
export class ChefProjetEditAdminComponent extends AbstractEditController<ChefProjetDto, ChefProjetCriteria, ChefProjetService>   implements OnInit {


    private _validChefProjetCode = true;




    constructor( private chefProjetService: ChefProjetService ) {
        super(chefProjetService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validChefProjetCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateChefProjetCode();
    }
    public validateChefProjetCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validChefProjetCode = false;
        } else {
            this.validChefProjetCode = true;
        }
    }






    get validChefProjetCode(): boolean {
        return this._validChefProjetCode;
    }
    set validChefProjetCode(value: boolean) {
        this._validChefProjetCode = value;
    }

}
