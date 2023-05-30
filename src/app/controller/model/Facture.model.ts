import {ProjetDto} from './Projet.model';
import {ComptableDto} from './Comptable.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FactureDto  extends BaseDto{

    public id: number;
    public reference: string;
    public libelle: string;
    public montant: number;
   public dateEmission: Date;
   public dateEcheance: Date;
    public montantMax: string ;
    public montantMin: string ;
    public dateEmissionMax: string ;
    public dateEmissionMin: string ;
    public dateEcheanceMax: string ;
    public dateEcheanceMin: string ;
    public comptable: ComptableDto ;
    public projet: ProjetDto ;

}
