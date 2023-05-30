import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {RemarqueService} from 'src/app/controller/service/Remarque.service';
import {RemarqueDto} from 'src/app/controller/model/Remarque.model';
import {RemarqueCriteria} from 'src/app/controller/criteria/RemarqueCriteria.model';


import {ProjetDto} from 'src/app/controller/model/Projet.model';
import {ProjetService} from 'src/app/controller/service/Projet.service';

@Component({
  selector: 'app-remarque-edit-admin',
  templateUrl: './remarque-edit-admin.component.html'
})
export class RemarqueEditAdminComponent extends AbstractEditController<RemarqueDto, RemarqueCriteria, RemarqueService>   implements OnInit {


    private _validRemarqueCode = true;

    private _validProjetCode = true;



    constructor( private remarqueService: RemarqueService , private projetService: ProjetService) {
        super(remarqueService);
    }

    ngOnInit(): void {
    this.projet = new ProjetDto();
    this.projetService.findAll().subscribe((data) => this.projets = data);
}
    public prepareEdit() {
        this.item.dateRemarque = this.remarqueService.format(this.item.dateRemarque);
    }



    public setValidation(value : boolean){
        this.validRemarqueCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateRemarqueCode();
    }
    public validateRemarqueCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validRemarqueCode = false;
        } else {
            this.validRemarqueCode = true;
        }
    }



   public async openCreateProjet(projet: string) {
        const isPermistted = await this.roleService.isPermitted('Projet', 'edit');
        if(isPermistted) {
             this.projet = new ProjetDto();
             this.createProjetDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get projet(): ProjetDto {
       return this.projetService.item;
   }
  set projet(value: ProjetDto) {
        this.projetService.item = value;
   }
   get projets(): Array<ProjetDto> {
        return this.projetService.items;
   }
   set projets(value: Array<ProjetDto>) {
        this.projetService.items = value;
   }
   get createProjetDialog(): boolean {
       return this.projetService.createDialog;
   }
  set createProjetDialog(value: boolean) {
       this.projetService.createDialog= value;
   }


    get validRemarqueCode(): boolean {
        return this._validRemarqueCode;
    }
    set validRemarqueCode(value: boolean) {
        this._validRemarqueCode = value;
    }

    get validProjetCode(): boolean {
        return this._validProjetCode;
    }
    set validProjetCode(value: boolean) {
        this._validProjetCode = value;
    }
}
