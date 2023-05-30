import {FactureDto} from './Facture.model';
import {MoyenPaiementDto} from './MoyenPaiement.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PaiementDto  extends BaseDto{

    public id: number;
    public code: string;
   public datePaiement: Date;
    public montant: number;
    public datePaiementMax: string ;
    public datePaiementMin: string ;
    public montantMax: string ;
    public montantMin: string ;
    public facture: FactureDto ;
    public moyenPaiement: MoyenPaiementDto ;

}
