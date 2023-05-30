import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TacheService} from 'src/app/controller/service/Tache.service';
import {TacheDto} from 'src/app/controller/model/Tache.model';
import {TacheCriteria} from 'src/app/controller/criteria/TacheCriteria.model';


import {CollaborateurDto} from 'src/app/controller/model/Collaborateur.model';
import {CollaborateurService} from 'src/app/controller/service/Collaborateur.service';

@Component({
  selector: 'app-tache-edit-admin',
  templateUrl: './tache-edit-admin.component.html'
})
export class TacheEditAdminComponent extends AbstractEditController<TacheDto, TacheCriteria, TacheService>   implements OnInit {


    private _validTacheCode = true;

    private _validCollaborateurCode = true;



    constructor( private tacheService: TacheService , private collaborateurService: CollaborateurService) {
        super(tacheService);
    }

    ngOnInit(): void {
    this.collaborateur = new CollaborateurDto();
    this.collaborateurService.findAll().subscribe((data) => this.collaborateurs = data);
}


    public setValidation(value : boolean){
        this.validTacheCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTacheCode();
    }
    public validateTacheCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTacheCode = false;
        } else {
            this.validTacheCode = true;
        }
    }




   get collaborateur(): CollaborateurDto {
       return this.collaborateurService.item;
   }
  set collaborateur(value: CollaborateurDto) {
        this.collaborateurService.item = value;
   }
   get collaborateurs(): Array<CollaborateurDto> {
        return this.collaborateurService.items;
   }
   set collaborateurs(value: Array<CollaborateurDto>) {
        this.collaborateurService.items = value;
   }
   get createCollaborateurDialog(): boolean {
       return this.collaborateurService.createDialog;
   }
  set createCollaborateurDialog(value: boolean) {
       this.collaborateurService.createDialog= value;
   }


    get validTacheCode(): boolean {
        return this._validTacheCode;
    }
    set validTacheCode(value: boolean) {
        this._validTacheCode = value;
    }

    get validCollaborateurCode(): boolean {
        return this._validCollaborateurCode;
    }
    set validCollaborateurCode(value: boolean) {
        this._validCollaborateurCode = value;
    }
}
