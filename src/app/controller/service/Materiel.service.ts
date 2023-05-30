import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {MaterielDto} from '../model/Materiel.model';
import {MaterielCriteria} from '../criteria/MaterielCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {CategorieMaterielDto} from '../model/CategorieMateriel.model';

@Injectable({
  providedIn: 'root'
})
export class MaterielService extends AbstractService<MaterielDto, MaterielCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/materiel/');
    }

    public constrcutDto(): MaterielDto {
        return new MaterielDto();
    }

    public constrcutCriteria(): MaterielCriteria {
        return new MaterielCriteria();
    }
}
