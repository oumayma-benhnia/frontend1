import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeDeclarationService} from 'src/app/controller/service/TypeDeclaration.service';
import {TypeDeclarationDto} from 'src/app/controller/model/TypeDeclaration.model';
import {TypeDeclarationCriteria} from 'src/app/controller/criteria/TypeDeclarationCriteria.model';

@Component({
  selector: 'app-type-declaration-view-admin',
  templateUrl: './type-declaration-view-admin.component.html'
})
export class TypeDeclarationViewAdminComponent extends AbstractViewController<TypeDeclarationDto, TypeDeclarationCriteria, TypeDeclarationService> implements OnInit {


    constructor(private typeDeclarationService: TypeDeclarationService){
        super(typeDeclarationService);
    }

    ngOnInit(): void {
    }




}
