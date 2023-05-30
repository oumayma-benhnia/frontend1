import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ComptableDto} from '../model/Comptable.model';
import {ComptableCriteria} from '../criteria/ComptableCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ComptableService extends AbstractService<ComptableDto, ComptableCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/comptable/');
    }

    public constrcutDto(): ComptableDto {
        return new ComptableDto();
    }

    public constrcutCriteria(): ComptableCriteria {
        return new ComptableCriteria();
    }
}
