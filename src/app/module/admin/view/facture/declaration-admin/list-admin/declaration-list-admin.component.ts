import {Component, OnInit} from '@angular/core';
import {DeclarationService} from 'src/app/controller/service/Declaration.service';
import {DeclarationDto} from 'src/app/controller/model/Declaration.model';
import {DeclarationCriteria} from 'src/app/controller/criteria/DeclarationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { TypeDeclarationService } from 'src/app/controller/service/TypeDeclaration.service';

import {TypeDeclarationDto} from 'src/app/controller/model/TypeDeclaration.model';


@Component({
  selector: 'app-declaration-list-admin',
  templateUrl: './declaration-list-admin.component.html'
})
export class DeclarationListAdminComponent extends AbstractListController<DeclarationDto, DeclarationCriteria, DeclarationService>  implements OnInit {

    fileName = 'Declaration';

    typeDeclarations :Array<TypeDeclarationDto>;
  
    constructor(declarationService: DeclarationService, private typeDeclarationService: TypeDeclarationService) {
        super(declarationService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadTypeDeclaration();
    }

    public async loadDeclarations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Declaration', 'list');
        isPermistted ? this.service.findAll().subscribe(declarations => this.items = declarations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'typeDeclaration?.libelle', header: 'Type declaration'},
        ];
    }


    public async loadTypeDeclaration(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Declaration', 'list');
        isPermistted ? this.typeDeclarationService.findAllOptimized().subscribe(typeDeclarations => this.typeDeclarations = typeDeclarations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: DeclarationDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Libelle': e.libelle ,
                'Type declaration': e.typeDeclaration?.libelle ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Type declaration': this.criteria.typeDeclaration?.libelle ? this.criteria.typeDeclaration?.libelle : environment.emptyForExport ,
        }];
      }
}
