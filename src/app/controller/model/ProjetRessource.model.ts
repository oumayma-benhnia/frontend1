import {RessourceDto} from './Ressource.model';
import {ProjetDto} from './Projet.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ProjetRessourceDto  extends BaseDto{

    public id: number;
    public code: string;
    public prix: number;
    public quantite: string;
    public prixMax: string ;
    public prixMin: string ;
    public ressource: RessourceDto ;
    public projet: ProjetDto ;

}
