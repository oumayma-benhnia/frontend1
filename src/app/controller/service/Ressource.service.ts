import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {RessourceDto} from '../model/Ressource.model';
import {RessourceCriteria} from '../criteria/RessourceCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {FournisseurDto} from '../model/Fournisseur.model';
import {EntiteAdministrativeDto} from '../model/EntiteAdministrative.model';
import {CollaborateurDto} from '../model/Collaborateur.model';
import {MaterielDto} from '../model/Materiel.model';

@Injectable({
  providedIn: 'root'
})
export class RessourceService extends AbstractService<RessourceDto, RessourceCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/ressource/');
    }

    public constrcutDto(): RessourceDto {
        return new RessourceDto();
    }

    public constrcutCriteria(): RessourceCriteria {
        return new RessourceCriteria();
    }
}
