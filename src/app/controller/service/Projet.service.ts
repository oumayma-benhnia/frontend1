import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ProjetDto} from '../model/Projet.model';
import {ProjetCriteria} from '../criteria/ProjetCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {ChefProjetDto} from '../model/ChefProjet.model';
import {RemarqueDto} from '../model/Remarque.model';
import {ProjetRessourceDto} from '../model/ProjetRessource.model';
import {TypeProjetDto} from '../model/TypeProjet.model';
import {ClientDto} from '../model/Client.model';
import {TacheDto} from '../model/Tache.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService extends AbstractService<ProjetDto, ProjetCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/projet/');
    }

    public constrcutDto(): ProjetDto {
        return new ProjetDto();
    }

    public constrcutCriteria(): ProjetCriteria {
        return new ProjetCriteria();
    }
}
