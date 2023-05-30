import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ClientCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public nom: string;
    public nomLike: string;
    public prenom: string;
    public prenomLike: string;
    public adresse: string;
    public adresseLike: string;
    public societe: string;
    public societeLike: string;
    public email: string;
    public emailLike: string;
    public tele: string;
    public teleLike: string;

}
