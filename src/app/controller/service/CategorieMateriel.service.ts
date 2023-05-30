import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CategorieMaterielDto} from '../model/CategorieMateriel.model';
import {CategorieMaterielCriteria} from '../criteria/CategorieMaterielCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CategorieMaterielService extends AbstractService<CategorieMaterielDto, CategorieMaterielCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/categorieMateriel/');
    }

    public constrcutDto(): CategorieMaterielDto {
        return new CategorieMaterielDto();
    }

    public constrcutCriteria(): CategorieMaterielCriteria {
        return new CategorieMaterielCriteria();
    }
}
