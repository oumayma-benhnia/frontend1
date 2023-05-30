import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeProjetService} from 'src/app/controller/service/TypeProjet.service';
import {TypeProjetDto} from 'src/app/controller/model/TypeProjet.model';
import {TypeProjetCriteria} from 'src/app/controller/criteria/TypeProjetCriteria.model';
@Component({
  selector: 'app-type-projet-create-admin',
  templateUrl: './type-projet-create-admin.component.html'
})
export class TypeProjetCreateAdminComponent extends AbstractCreateController<TypeProjetDto, TypeProjetCriteria, TypeProjetService>  implements OnInit {



   private _validTypeProjetCode = true;
   private _validTypeProjetLibelle = true;

    constructor( private typeProjetService: TypeProjetService ) {
        super(typeProjetService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypeProjetCode = value;
        this.validTypeProjetLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeProjetCode();
        this.validateTypeProjetLibelle();
    }

    public validateTypeProjetCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypeProjetCode = false;
        } else {
            this.validTypeProjetCode = true;
        }
    }
    public validateTypeProjetLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTypeProjetLibelle = false;
        } else {
            this.validTypeProjetLibelle = true;
        }
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



}
