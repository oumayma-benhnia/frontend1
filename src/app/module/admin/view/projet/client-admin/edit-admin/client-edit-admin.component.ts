import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ClientService} from 'src/app/controller/service/Client.service';
import {ClientDto} from 'src/app/controller/model/Client.model';
import {ClientCriteria} from 'src/app/controller/criteria/ClientCriteria.model';



@Component({
  selector: 'app-client-edit-admin',
  templateUrl: './client-edit-admin.component.html'
})
export class ClientEditAdminComponent extends AbstractEditController<ClientDto, ClientCriteria, ClientService>   implements OnInit {


    private _validClientCode = true;




    constructor( private clientService: ClientService ) {
        super(clientService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validClientCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateClientCode();
    }
    public validateClientCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validClientCode = false;
        } else {
            this.validClientCode = true;
        }
    }






    get validClientCode(): boolean {
        return this._validClientCode;
    }
    set validClientCode(value: boolean) {
        this._validClientCode = value;
    }

}
