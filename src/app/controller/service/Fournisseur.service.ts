import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FournisseurDto} from '../model/Fournisseur.model';
import {FournisseurCriteria} from '../criteria/FournisseurCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class FournisseurService extends AbstractService<FournisseurDto, FournisseurCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/fournisseur/');
    }

    public constrcutDto(): FournisseurDto {
        return new FournisseurDto();
    }

    public constrcutCriteria(): FournisseurCriteria {
        return new FournisseurCriteria();
    }
}
