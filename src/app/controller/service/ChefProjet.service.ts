import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ChefProjetDto} from '../model/ChefProjet.model';
import {ChefProjetCriteria} from '../criteria/ChefProjetCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ChefProjetService extends AbstractService<ChefProjetDto, ChefProjetCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/chefProjet/');
    }

    public constrcutDto(): ChefProjetDto {
        return new ChefProjetDto();
    }

    public constrcutCriteria(): ChefProjetCriteria {
        return new ChefProjetCriteria();
    }
}
