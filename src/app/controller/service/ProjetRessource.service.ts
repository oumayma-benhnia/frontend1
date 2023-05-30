import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ProjetRessourceDto} from '../model/ProjetRessource.model';
import {ProjetRessourceCriteria} from '../criteria/ProjetRessourceCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {RessourceDto} from '../model/Ressource.model';
import {ProjetDto} from '../model/Projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetRessourceService extends AbstractService<ProjetRessourceDto, ProjetRessourceCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/projetRessource/');
    }

    public constrcutDto(): ProjetRessourceDto {
        return new ProjetRessourceDto();
    }

    public constrcutCriteria(): ProjetRessourceCriteria {
        return new ProjetRessourceCriteria();
    }
}
