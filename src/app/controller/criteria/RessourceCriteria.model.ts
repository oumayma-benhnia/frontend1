import {FournisseurCriteria} from './FournisseurCriteria.model';
import {EntiteAdministrativeCriteria} from './EntiteAdministrativeCriteria.model';
import {CollaborateurCriteria} from './CollaborateurCriteria.model';
import {MaterielCriteria} from './MaterielCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class RessourceCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public nom: string;
    public nomLike: string;
     public prix: number;
     public prixMin: number;
     public prixMax: number;
     public cout: number;
     public coutMin: number;
     public coutMax: number;
    public type: string;
    public typeLike: string;
    public unite: string;
    public uniteLike: string;
  public fournisseur: FournisseurCriteria ;
  public fournisseurs: Array<FournisseurCriteria> ;
  public materiel: MaterielCriteria ;
  public materiels: Array<MaterielCriteria> ;
  public collaborateur: CollaborateurCriteria ;
  public collaborateurs: Array<CollaborateurCriteria> ;
  public entiteAdministrative: EntiteAdministrativeCriteria ;
  public entiteAdministratives: Array<EntiteAdministrativeCriteria> ;

}
