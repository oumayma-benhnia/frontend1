import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PaiementDto} from '../model/Paiement.model';
import {PaiementCriteria} from '../criteria/PaiementCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {FactureDto} from '../model/Facture.model';
import {MoyenPaiementDto} from '../model/MoyenPaiement.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementService extends AbstractService<PaiementDto, PaiementCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/paiement/');
    }

    public constrcutDto(): PaiementDto {
        return new PaiementDto();
    }

    public constrcutCriteria(): PaiementCriteria {
        return new PaiementCriteria();
    }
}
