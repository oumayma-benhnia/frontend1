import {ProjetCriteria} from './ProjetCriteria.model';
import {ComptableCriteria} from './ComptableCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class FactureCriteria  extends   BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public libelle: string;
    public libelleLike: string;
     public montant: number;
     public montantMin: number;
     public montantMax: number;
    public dateEmission: Date;
    public dateEmissionFrom: Date;
    public dateEmissionTo: Date;
    public dateEcheance: Date;
    public dateEcheanceFrom: Date;
    public dateEcheanceTo: Date;
  public comptable: ComptableCriteria ;
  public comptables: Array<ComptableCriteria> ;
  public projet: ProjetCriteria ;
  public projets: Array<ProjetCriteria> ;

}
