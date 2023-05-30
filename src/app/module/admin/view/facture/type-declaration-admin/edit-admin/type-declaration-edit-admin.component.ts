import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TypeDeclarationService} from 'src/app/controller/service/TypeDeclaration.service';
import {TypeDeclarationDto} from 'src/app/controller/model/TypeDeclaration.model';
import {TypeDeclarationCriteria} from 'src/app/controller/criteria/TypeDeclarationCriteria.model';



@Component({
  selector: 'app-type-declaration-edit-admin',
  templateUrl: './type-declaration-edit-admin.component.html'
})
export class TypeDeclarationEditAdminComponent extends AbstractEditController<TypeDeclarationDto, TypeDeclarationCriteria, TypeDeclarationService>   implements OnInit {


    private _validTypeDeclarationReference = true;
    private _validTypeDeclarationLibelle = true;




    constructor( private typeDeclarationService: TypeDeclarationService ) {
        super(typeDeclarationService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validTypeDeclarationReference = value;
        this.validTypeDeclarationLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeDeclarationReference();
        this.validateTypeDeclarationLibelle();
    }
    public validateTypeDeclarationReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validTypeDeclarationReference = false;
        } else {
            this.validTypeDeclarationReference = true;
        }
    }
    public validateTypeDeclarationLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTypeDeclarationLibelle = false;
        } else {
            this.validTypeDeclarationLibelle = true;
        }
    }






    get validTypeDeclarationReference(): boolean {
        return this._validTypeDeclarationReference;
    }
    set validTypeDeclarationReference(value: boolean) {
        this._validTypeDeclarationReference = value;
    }
    get validTypeDeclarationLibelle(): boolean {
        return this._validTypeDeclarationLibelle;
    }
    set validTypeDeclarationLibelle(value: boolean) {
        this._validTypeDeclarationLibelle = value;
    }

}
