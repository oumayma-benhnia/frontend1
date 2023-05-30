import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TacheDto} from '../model/Tache.model';
import {TacheCriteria} from '../criteria/TacheCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {CollaborateurDto} from '../model/Collaborateur.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService extends AbstractService<TacheDto, TacheCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/tache/');
    }

    public constrcutDto(): TacheDto {
        return new TacheDto();
    }

    public constrcutCriteria(): TacheCriteria {
        return new TacheCriteria();
    }
}
