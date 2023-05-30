import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EntiteAdministrativeService} from 'src/app/controller/service/EntiteAdministrative.service';
import {EntiteAdministrativeDto} from 'src/app/controller/model/EntiteAdministrative.model';
import {EntiteAdministrativeCriteria} from 'src/app/controller/criteria/EntiteAdministrativeCriteria.model';
@Component({
  selector: 'app-entite-administrative-create-admin',
  templateUrl: './entite-administrative-create-admin.component.html'
})
export class EntiteAdministrativeCreateAdminComponent extends AbstractCreateController<EntiteAdministrativeDto, EntiteAdministrativeCriteria, EntiteAdministrativeService>  implements OnInit {



   private _validEntiteAdministrativeCode = true;
   private _validEntiteAdministrativeLibelle = true;

    constructor( private entiteAdministrativeService: EntiteAdministrativeService ) {
        super(entiteAdministrativeService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validEntiteAdministrativeCode = value;
        this.validEntiteAdministrativeLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEntiteAdministrativeCode();
        this.validateEntiteAdministrativeLibelle();
    }

    public validateEntiteAdministrativeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validEntiteAdministrativeCode = false;
        } else {
            this.validEntiteAdministrativeCode = true;
        }
    }
    public validateEntiteAdministrativeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validEntiteAdministrativeLibelle = false;
        } else {
            this.validEntiteAdministrativeLibelle = true;
        }
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
