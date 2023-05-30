import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {MaterielService} from 'src/app/controller/service/Materiel.service';
import {MaterielDto} from 'src/app/controller/model/Materiel.model';
import {MaterielCriteria} from 'src/app/controller/criteria/MaterielCriteria.model';

import {CategorieMaterielDto} from 'src/app/controller/model/CategorieMateriel.model';
import {CategorieMaterielService} from 'src/app/controller/service/CategorieMateriel.service';
@Component({
  selector: 'app-materiel-view-admin',
  templateUrl: './materiel-view-admin.component.html'
})
export class MaterielViewAdminComponent extends AbstractViewController<MaterielDto, MaterielCriteria, MaterielService> implements OnInit {


    constructor(private materielService: MaterielService, private categorieMaterielService: CategorieMaterielService){
        super(materielService);
    }

    ngOnInit(): void {
        this.categorieMateriel = new CategorieMaterielDto();
        this.categorieMaterielService.findAll().subscribe((data) => this.categorieMateriels = data);
    }


    get categorieMateriel(): CategorieMaterielDto {
       return this.categorieMaterielService.item;
    }
    set categorieMateriel(value: CategorieMaterielDto) {
        this.categorieMaterielService.item = value;
    }
    get categorieMateriels():Array<CategorieMaterielDto> {
       return this.categorieMaterielService.items;
    }
    set categorieMateriels(value: Array<CategorieMaterielDto>) {
        this.categorieMaterielService.items = value;
    }


}
