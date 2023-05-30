import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class FournisseurDto  extends BaseDto{

    public id: number;
    public code: string;
    public nom: string;
    public prenom: string;
    public email: string;
    public tele: string;
    public societe: string;
    public adresse: string;

}
