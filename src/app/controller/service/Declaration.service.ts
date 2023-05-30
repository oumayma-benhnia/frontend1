import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DeclarationDto} from '../model/Declaration.model';
import {DeclarationCriteria} from '../criteria/DeclarationCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {TypeDeclarationDto} from '../model/TypeDeclaration.model';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService extends AbstractService<DeclarationDto, DeclarationCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/declaration/');
    }

    public constrcutDto(): DeclarationDto {
        return new DeclarationDto();
    }

    public constrcutCriteria(): DeclarationCriteria {
        return new DeclarationCriteria();
    }
}
