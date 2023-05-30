import {Component, OnInit} from '@angular/core';
import {TypeDeclarationService} from 'src/app/controller/service/TypeDeclaration.service';
import {TypeDeclarationDto} from 'src/app/controller/model/TypeDeclaration.model';
import {TypeDeclarationCriteria} from 'src/app/controller/criteria/TypeDeclarationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-type-declaration-list-admin',
  templateUrl: './type-declaration-list-admin.component.html'
})
export class TypeDeclarationListAdminComponent extends AbstractListController<TypeDeclarationDto, TypeDeclarationCriteria, TypeDeclarationService>  implements OnInit {

    fileName = 'TypeDeclaration';

  
    constructor(typeDeclarationService: TypeDeclarationService) {
        super(typeDeclarationService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypeDeclarations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeDeclaration', 'list');
        isPermistted ? this.service.findAll().subscribe(typeDeclarations => this.items = typeDeclarations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: TypeDeclarationDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
