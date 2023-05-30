import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TypeProjetDto} from '../model/TypeProjet.model';
import {TypeProjetCriteria} from '../criteria/TypeProjetCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TypeProjetService extends AbstractService<TypeProjetDto, TypeProjetCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/typeProjet/');
    }

    public constrcutDto(): TypeProjetDto {
        return new TypeProjetDto();
    }

    public constrcutCriteria(): TypeProjetCriteria {
        return new TypeProjetCriteria();
    }
}
