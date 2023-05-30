import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FactureDto} from '../model/Facture.model';
import {FactureCriteria} from '../criteria/FactureCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ProjetDto} from '../model/Projet.model';
import {ComptableDto} from '../model/Comptable.model';

@Injectable({
  providedIn: 'root'
})
export class FactureService extends AbstractService<FactureDto, FactureCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/facture/');
    }

    public constrcutDto(): FactureDto {
        return new FactureDto();
    }

    public constrcutCriteria(): FactureCriteria {
        return new FactureCriteria();
    }
}
