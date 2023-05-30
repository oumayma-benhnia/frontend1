import {ChefProjetDto} from './ChefProjet.model';
import {RemarqueDto} from './Remarque.model';
import {ProjetRessourceDto} from './ProjetRessource.model';
import {TypeProjetDto} from './TypeProjet.model';
import {ClientDto} from './Client.model';
import {TacheDto} from './Tache.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ProjetDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;
    public budget: number;
    public progression: string;
   public dateDebut: Date;
   public dateFinEstime: Date;
   public dateFin: Date;
    public budgetMax: string ;
    public budgetMin: string ;
    public dateDebutMax: string ;
    public dateDebutMin: string ;
    public dateFinEstimeMax: string ;
    public dateFinEstimeMin: string ;
    public dateFinMax: string ;
    public dateFinMin: string ;
    public typeProjet: TypeProjetDto ;
    public client: ClientDto ;
    public chefProjet: ChefProjetDto ;
     public projetRessources: Array<ProjetRessourceDto>;
     public taches: Array<TacheDto>;
     public remarques: Array<RemarqueDto>;

}
