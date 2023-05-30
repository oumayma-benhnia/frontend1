import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CollaborateurDto} from '../model/Collaborateur.model';
import {CollaborateurCriteria} from '../criteria/CollaborateurCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CollaborateurService extends AbstractService<CollaborateurDto, CollaborateurCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/collaborateur/');
    }

    public constrcutDto(): CollaborateurDto {
        return new CollaborateurDto();
    }

    public constrcutCriteria(): CollaborateurCriteria {
        return new CollaborateurCriteria();
    }
}
