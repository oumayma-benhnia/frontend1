import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TypeDeclarationDto} from '../model/TypeDeclaration.model';
import {TypeDeclarationCriteria} from '../criteria/TypeDeclarationCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TypeDeclarationService extends AbstractService<TypeDeclarationDto, TypeDeclarationCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/typeDeclaration/');
    }

    public constrcutDto(): TypeDeclarationDto {
        return new TypeDeclarationDto();
    }

    public constrcutCriteria(): TypeDeclarationCriteria {
        return new TypeDeclarationCriteria();
    }
}
