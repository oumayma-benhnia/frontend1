import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {MaterielService} from 'src/app/controller/service/Materiel.service';
import {MaterielDto} from 'src/app/controller/model/Materiel.model';
import {MaterielCriteria} from 'src/app/controller/criteria/MaterielCriteria.model';
import {CategorieMaterielDto} from 'src/app/controller/model/CategorieMateriel.model';
import {CategorieMaterielService} from 'src/app/controller/service/CategorieMateriel.service';
@Component({
  selector: 'app-materiel-create-admin',
  templateUrl: './materiel-create-admin.component.html'
})
export class MaterielCreateAdminComponent extends AbstractCreateController<MaterielDto, MaterielCriteria, MaterielService>  implements OnInit {



   private _validMaterielLibelle = true;
   private _validMaterielReference = true;
    private _validCategorieMaterielLibelle = true;
    private _validCategorieMaterielReference = true;

    constructor( private materielService: MaterielService , private categorieMaterielService: CategorieMaterielService) {
        super(materielService);
    }

    ngOnInit(): void {
    this.categorieMateriel = new CategorieMaterielDto();
    this.categorieMaterielService.findAll().subscribe((data) => this.categorieMateriels = data);
}





    public setValidation(value: boolean){
        this.validMaterielLibelle = value;
        this.validMaterielReference = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateMaterielLibelle();
        this.validateMaterielReference();
    }

    public validateMaterielLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validMaterielLibelle = false;
        } else {
            this.validMaterielLibelle = true;
        }
    }
    public validateMaterielReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validMaterielReference = false;
        } else {
            this.validMaterielReference = true;
        }
    }


    public async openCreateCategorieMateriel(categorieMateriel: string) {
    const isPermistted = await this.roleService.isPermitted('CategorieMateriel', 'add');
    if(isPermistted) {
         this.categorieMateriel = new CategorieMaterielDto();
         this.createCategorieMaterielDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get categorieMateriel(): CategorieMaterielDto {
        return this.categorieMaterielService.item;
    }
    set categorieMateriel(value: CategorieMaterielDto) {
        this.categorieMaterielService.item = value;
    }
    get categorieMateriels(): Array<CategorieMaterielDto> {
        return this.categorieMaterielService.items;
    }
    set categorieMateriels(value: Array<CategorieMaterielDto>) {
        this.categorieMaterielService.items = value;
    }
    get createCategorieMaterielDialog(): boolean {
       return this.categorieMaterielService.createDialog;
    }
    set createCategorieMaterielDialog(value: boolean) {
        this.categorieMaterielService.createDialog= value;
    }



    get validMaterielLibelle(): boolean {
        return this._validMaterielLibelle;
    }

    set validMaterielLibelle(value: boolean) {
         this._validMaterielLibelle = value;
    }
    get validMaterielReference(): boolean {
        return this._validMaterielReference;
    }

    set validMaterielReference(value: boolean) {
         this._validMaterielReference = value;
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
