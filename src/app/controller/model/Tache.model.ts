import {CollaborateurDto} from './Collaborateur.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {ProjetDto} from "./Projet.model";


export class TacheDto  extends BaseDto{

    public id: number;
    public code: string;
    public nom: string;
    public prenom: string;
    public email: string;
    public tele: string;
    public titre: string;
    public salaire: number;
    public salaireMax: string ;
    public salaireMin: string ;
    public collaborateur: CollaborateurDto ;
    public projet: ProjetDto;

}
