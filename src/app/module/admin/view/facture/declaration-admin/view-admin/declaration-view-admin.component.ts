import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {DeclarationService} from 'src/app/controller/service/Declaration.service';
import {DeclarationDto} from 'src/app/controller/model/Declaration.model';
import {DeclarationCriteria} from 'src/app/controller/criteria/DeclarationCriteria.model';

import {TypeDeclarationDto} from 'src/app/controller/model/TypeDeclaration.model';
import {TypeDeclarationService} from 'src/app/controller/service/TypeDeclaration.service';
@Component({
  selector: 'app-declaration-view-admin',
  templateUrl: './declaration-view-admin.component.html'
})
export class DeclarationViewAdminComponent extends AbstractViewController<DeclarationDto, DeclarationCriteria, DeclarationService> implements OnInit {


    constructor(private declarationService: DeclarationService, private typeDeclarationService: TypeDeclarationService){
        super(declarationService);
    }

    ngOnInit(): void {
        this.typeDeclaration = new TypeDeclarationDto();
        this.typeDeclarationService.findAll().subscribe((data) => this.typeDeclarations = data);
    }


    get typeDeclaration(): TypeDeclarationDto {
       return this.typeDeclarationService.item;
    }
    set typeDeclaration(value: TypeDeclarationDto) {
        this.typeDeclarationService.item = value;
    }
    get typeDeclarations():Array<TypeDeclarationDto> {
       return this.typeDeclarationService.items;
    }
    set typeDeclarations(value: Array<TypeDeclarationDto>) {
        this.typeDeclarationService.items = value;
    }


}
