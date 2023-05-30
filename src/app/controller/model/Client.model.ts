import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ClientDto  extends BaseDto{

    public id: number;
    public code: string;
    public nom: string;
    public prenom: string;
    public adresse: string;
    public societe: string;
    public email: string;
    public tele: string;

}
