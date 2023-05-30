import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {RemarqueDto} from '../model/Remarque.model';
import {RemarqueCriteria} from '../criteria/RemarqueCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ProjetDto} from '../model/Projet.model';

@Injectable({
  providedIn: 'root'
})
export class RemarqueService extends AbstractService<RemarqueDto, RemarqueCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/remarque/');
    }

    public constrcutDto(): RemarqueDto {
        return new RemarqueDto();
    }

    public constrcutCriteria(): RemarqueCriteria {
        return new RemarqueCriteria();
    }
}
