import {CategorieMaterielCriteria} from './CategorieMaterielCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class MaterielCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public reference: string;
    public referenceLike: string;
    public quantite: string;
    public quantiteLike: string;
     public prix: number;
     public prixMin: number;
     public prixMax: number;
  public categorieMateriel: CategorieMaterielCriteria ;
  public categorieMateriels: Array<CategorieMaterielCriteria> ;

}
