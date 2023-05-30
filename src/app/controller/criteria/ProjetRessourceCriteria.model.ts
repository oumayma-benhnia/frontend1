import {RessourceCriteria} from './RessourceCriteria.model';
import {ProjetCriteria} from './ProjetCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ProjetRessourceCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
     public prix: number;
     public prixMin: number;
     public prixMax: number;
    public quantite: string;
    public quantiteLike: string;
  public ressource: RessourceCriteria ;
  public ressources: Array<RessourceCriteria> ;
  public projet: ProjetCriteria ;
  public projets: Array<ProjetCriteria> ;

}
