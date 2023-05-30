import {TypeDeclarationCriteria} from './TypeDeclarationCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class DeclarationCriteria  extends   BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public libelle: string;
    public libelleLike: string;
  public typeDeclaration: TypeDeclarationCriteria ;
  public typeDeclarations: Array<TypeDeclarationCriteria> ;

}
