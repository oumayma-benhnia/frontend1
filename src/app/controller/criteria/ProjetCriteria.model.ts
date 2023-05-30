import {ChefProjetCriteria} from './ChefProjetCriteria.model';
import {RemarqueCriteria} from './RemarqueCriteria.model';
import {ProjetRessourceCriteria} from './ProjetRessourceCriteria.model';
import {TypeProjetCriteria} from './TypeProjetCriteria.model';
import {ClientCriteria} from './ClientCriteria.model';
import {TacheCriteria} from './TacheCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ProjetCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
     public budget: number;
     public budgetMin: number;
     public budgetMax: number;
    public progression: string;
    public progressionLike: string;
    public dateDebut: Date;
    public dateDebutFrom: Date;
    public dateDebutTo: Date;
    public dateFinEstime: Date;
    public dateFinEstimeFrom: Date;
    public dateFinEstimeTo: Date;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
  public typeProjet: TypeProjetCriteria ;
  public typeProjets: Array<TypeProjetCriteria> ;
  public client: ClientCriteria ;
  public clients: Array<ClientCriteria> ;
  public chefProjet: ChefProjetCriteria ;
  public chefProjets: Array<ChefProjetCriteria> ;
      public projetRessources: Array<ProjetRessourceCriteria>;
      public taches: Array<TacheCriteria>;
      public remarques: Array<RemarqueCriteria>;

}
