import {ProjetDto} from './Projet.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class RemarqueDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;
   public dateRemarque: Date;
    public dateRemarqueMax: string ;
    public dateRemarqueMin: string ;
    public projet: ProjetDto ;

}
