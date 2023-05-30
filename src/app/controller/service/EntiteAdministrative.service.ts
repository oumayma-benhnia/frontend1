import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EntiteAdministrativeDto} from '../model/EntiteAdministrative.model';
import {EntiteAdministrativeCriteria} from '../criteria/EntiteAdministrativeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EntiteAdministrativeService extends AbstractService<EntiteAdministrativeDto, EntiteAdministrativeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/entiteAdministrative/');
    }

    public constrcutDto(): EntiteAdministrativeDto {
        return new EntiteAdministrativeDto();
    }

    public constrcutCriteria(): EntiteAdministrativeCriteria {
        return new EntiteAdministrativeCriteria();
    }
}
