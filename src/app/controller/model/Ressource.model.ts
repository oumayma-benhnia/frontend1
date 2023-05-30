import {FournisseurDto} from './Fournisseur.model';
import {EntiteAdministrativeDto} from './EntiteAdministrative.model';
import {CollaborateurDto} from './Collaborateur.model';
import {MaterielDto} from './Materiel.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class RessourceDto  extends BaseDto{

    public id: number;
    public code: string;
    public nom: string;
    public prix: number;
    public cout: number;
    public type: string;
    public unite: string;
    public prixMax: string ;
    public prixMin: string ;
    public coutMax: string ;
    public coutMin: string ;
    public fournisseur: FournisseurDto ;
    public materiel: MaterielDto ;
    public collaborateur: CollaborateurDto ;
    public entiteAdministrative: EntiteAdministrativeDto ;

}
