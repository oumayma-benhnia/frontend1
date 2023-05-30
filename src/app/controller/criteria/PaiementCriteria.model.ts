import {FactureCriteria} from './FactureCriteria.model';
import {MoyenPaiementCriteria} from './MoyenPaiementCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class PaiementCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public datePaiement: Date;
    public datePaiementFrom: Date;
    public datePaiementTo: Date;
     public montant: number;
     public montantMin: number;
     public montantMax: number;
  public facture: FactureCriteria ;
  public factures: Array<FactureCriteria> ;
  public moyenPaiement: MoyenPaiementCriteria ;
  public moyenPaiements: Array<MoyenPaiementCriteria> ;

}
