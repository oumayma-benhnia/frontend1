import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class MoyenPaiementCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public dateRemarque: Date;
    public dateRemarqueFrom: Date;
    public dateRemarqueTo: Date;

}
