import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class FournisseurCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public nom: string;
    public nomLike: string;
    public prenom: string;
    public prenomLike: string;
    public email: string;
    public emailLike: string;
    public tele: string;
    public teleLike: string;
    public societe: string;
    public societeLike: string;
    public adresse: string;
    public adresseLike: string;

}
