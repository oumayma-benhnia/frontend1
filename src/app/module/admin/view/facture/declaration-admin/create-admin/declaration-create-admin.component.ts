import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {DeclarationService} from 'src/app/controller/service/Declaration.service';
import {DeclarationDto} from 'src/app/controller/model/Declaration.model';
import {DeclarationCriteria} from 'src/app/controller/criteria/DeclarationCriteria.model';
import {TypeDeclarationDto} from 'src/app/controller/model/TypeDeclaration.model';
import {TypeDeclarationService} from 'src/app/controller/service/TypeDeclaration.service';
@Component({
  selector: 'app-declaration-create-admin',
  templateUrl: './declaration-create-admin.component.html'
})
export class DeclarationCreateAdminComponent extends AbstractCreateController<DeclarationDto, DeclarationCriteria, DeclarationService>  implements OnInit {



   private _validDeclarationReference = true;
   private _validDeclarationLibelle = true;
    private _validTypeDeclarationReference = true;
    private _validTypeDeclarationLibelle = true;

    constructor( private declarationService: DeclarationService , private typeDeclarationService: TypeDeclarationService) {
        super(declarationService);
    }

    ngOnInit(): void {
    this.typeDeclaration = new TypeDeclarationDto();
    this.typeDeclarationService.findAll().subscribe((data) => this.typeDeclarations = data);
}





    public setValidation(value: boolean){
        this.validDeclarationReference = value;
        this.validDeclarationLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDeclarationReference();
        this.validateDeclarationLibelle();
    }

    public validateDeclarationReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validDeclarationReference = false;
        } else {
            this.validDeclarationReference = true;
        }
    }
    public validateDeclarationLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validDeclarationLibelle = false;
        } else {
            this.validDeclarationLibelle = true;
        }
    }


    public async openCreateTypeDeclaration(typeDeclaration: string) {
    const isPermistted = await this.roleService.isPermitted('TypeDeclaration', 'add');
    if(isPermistted) {
         this.typeDeclaration = new TypeDeclarationDto();
         this.createTypeDeclarationDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get typeDeclaration(): TypeDeclarationDto {
        return this.typeDeclarationService.item;
    }
    set typeDeclaration(value: TypeDeclarationDto) {
        this.typeDeclarationService.item = value;
    }
    get typeDeclarations(): Array<TypeDeclarationDto> {
        return this.typeDeclarationService.items;
    }
    set typeDeclarations(value: Array<TypeDeclarationDto>) {
        this.typeDeclarationService.items = value;
    }
    get createTypeDeclarationDialog(): boolean {
       return this.typeDeclarationService.createDialog;
    }
    set createTypeDeclarationDialog(value: boolean) {
        this.typeDeclarationService.createDialog= value;
    }



    get validDeclarationReference(): boolean {
        return this._validDeclarationReference;
    }

    set validDeclarationReference(value: boolean) {
         this._validDeclarationReference = value;
    }
    get validDeclarationLibelle(): boolean {
        return this._validDeclarationLibelle;
    }

    set validDeclarationLibelle(value: boolean) {
         this._validDeclarationLibelle = value;
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
