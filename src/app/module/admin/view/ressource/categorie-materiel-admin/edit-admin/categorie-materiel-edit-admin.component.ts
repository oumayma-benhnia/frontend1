import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {CategorieMaterielService} from 'src/app/controller/service/CategorieMateriel.service';
import {CategorieMaterielDto} from 'src/app/controller/model/CategorieMateriel.model';
import {CategorieMaterielCriteria} from 'src/app/controller/criteria/CategorieMaterielCriteria.model';



@Component({
  selector: 'app-categorie-materiel-edit-admin',
  templateUrl: './categorie-materiel-edit-admin.component.html'
})
export class CategorieMaterielEditAdminComponent extends AbstractEditController<CategorieMaterielDto, CategorieMaterielCriteria, CategorieMaterielService>   implements OnInit {


    private _validCategorieMaterielLibelle = true;
    private _validCategorieMaterielReference = true;




    constructor( private categorieMaterielService: CategorieMaterielService ) {
        super(categorieMaterielService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validCategorieMaterielLibelle = value;
        this.validCategorieMaterielReference = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCategorieMaterielLibelle();
        this.validateCategorieMaterielReference();
    }
    public validateCategorieMaterielLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCategorieMaterielLibelle = false;
        } else {
            this.validCategorieMaterielLibelle = true;
        }
    }
    public validateCategorieMaterielReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validCategorieMaterielReference = false;
        } else {
            this.validCategorieMaterielReference = true;
        }
    }






    get validCategorieMaterielLibelle(): boolean {
        return this._validCategorieMaterielLibelle;
    }
    set validCategorieMaterielLibelle(value: boolean) {
        this._validCategorieMaterielLibelle = value;
    }
    get validCategorieMaterielReference(): boolean {
        return this._validCategorieMaterielReference;
    }
    set validCategorieMaterielReference(value: boolean) {
        this._validCategorieMaterielReference = value;
    }

}
