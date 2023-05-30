import {Component, OnInit} from '@angular/core';
import {RessourceService} from 'src/app/controller/service/Ressource.service';
import {RessourceDto} from 'src/app/controller/model/Ressource.model';
import {RessourceCriteria} from 'src/app/controller/criteria/RessourceCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { FournisseurService } from 'src/app/controller/service/Fournisseur.service';
import { MaterielService } from 'src/app/controller/service/Materiel.service';
import { CollaborateurService } from 'src/app/controller/service/Collaborateur.service';
import { EntiteAdministrativeService } from 'src/app/controller/service/EntiteAdministrative.service';

import {FournisseurDto} from 'src/app/controller/model/Fournisseur.model';
import {EntiteAdministrativeDto} from 'src/app/controller/model/EntiteAdministrative.model';
import {CollaborateurDto} from 'src/app/controller/model/Collaborateur.model';
import {MaterielDto} from 'src/app/controller/model/Materiel.model';


@Component({
  selector: 'app-ressource-list-admin',
  templateUrl: './ressource-list-admin.component.html'
})
export class RessourceListAdminComponent extends AbstractListController<RessourceDto, RessourceCriteria, RessourceService>  implements OnInit {

    fileName = 'Ressource';

    fournisseurs :Array<FournisseurDto>;
    materiels :Array<MaterielDto>;
    collaborateurs :Array<CollaborateurDto>;
    entiteAdministratives :Array<EntiteAdministrativeDto>;
  
    constructor(ressourceService: RessourceService, private fournisseurService: FournisseurService, private materielService: MaterielService, private collaborateurService: CollaborateurService, private entiteAdministrativeService: EntiteAdministrativeService) {
        super(ressourceService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadFournisseur();
      this.loadMateriel();
      this.loadCollaborateur();
      this.loadEntiteAdministrative();
    }

    public async loadRessources(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Ressource', 'list');
        isPermistted ? this.service.findAll().subscribe(ressources => this.items = ressources,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'nom', header: 'Nom'},
            {field: 'prix', header: 'Prix'},
            {field: 'cout', header: 'Cout'},
            {field: 'type', header: 'Type'},
            {field: 'unite', header: 'Unite'},
            {field: 'fournisseur?.code', header: 'Fournisseur'},
            {field: 'materiel?.libelle', header: 'Materiel'},
            {field: 'collaborateur?.code', header: 'Collaborateur'},
            {field: 'entiteAdministrative?.libelle', header: 'Entite administrative'},
        ];
    }


    public async loadFournisseur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Ressource', 'list');
        isPermistted ? this.fournisseurService.findAllOptimized().subscribe(fournisseurs => this.fournisseurs = fournisseurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadMateriel(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Ressource', 'list');
        isPermistted ? this.materielService.findAllOptimized().subscribe(materiels => this.materiels = materiels,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadCollaborateur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Ressource', 'list');
        isPermistted ? this.collaborateurService.findAllOptimized().subscribe(collaborateurs => this.collaborateurs = collaborateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEntiteAdministrative(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Ressource', 'list');
        isPermistted ? this.entiteAdministrativeService.findAllOptimized().subscribe(entiteAdministratives => this.entiteAdministratives = entiteAdministratives,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: RessourceDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Nom': e.nom ,
                 'Prix': e.prix ,
                 'Cout': e.cout ,
                 'Type': e.type ,
                 'Unite': e.unite ,
                'Fournisseur': e.fournisseur?.code ,
                'Materiel': e.materiel?.libelle ,
                'Collaborateur': e.collaborateur?.code ,
                'Entite administrative': e.entiteAdministrative?.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prix Min': this.criteria.prixMin ? this.criteria.prixMin : environment.emptyForExport ,
            'Prix Max': this.criteria.prixMax ? this.criteria.prixMax : environment.emptyForExport ,
            'Cout Min': this.criteria.coutMin ? this.criteria.coutMin : environment.emptyForExport ,
            'Cout Max': this.criteria.coutMax ? this.criteria.coutMax : environment.emptyForExport ,
            'Type': this.criteria.type ? this.criteria.type : environment.emptyForExport ,
            'Unite': this.criteria.unite ? this.criteria.unite : environment.emptyForExport ,
        //'Fournisseur': this.criteria.fournisseur?.code ? this.criteria.fournisseur?.code : environment.emptyForExport ,
        //'Materiel': this.criteria.materiel?.libelle ? this.criteria.materiel?.libelle : environment.emptyForExport ,
        //'Collaborateur': this.criteria.collaborateur?.code ? this.criteria.collaborateur?.code : environment.emptyForExport ,
        //'Entite administrative': this.criteria.entiteAdministrative?.libelle ? this.criteria.entiteAdministrative?.libelle : environment.emptyForExport ,
        }];
      }
}
