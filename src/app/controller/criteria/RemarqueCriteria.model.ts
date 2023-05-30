import {ProjetCriteria} from './ProjetCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class RemarqueCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public dateRemarque: Date;
    public dateRemarqueFrom: Date;
    public dateRemarqueTo: Date;
  public projet: ProjetCriteria ;
  public projets: Array<ProjetCriteria> ;

}
