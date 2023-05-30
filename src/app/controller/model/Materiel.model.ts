import {CategorieMaterielDto} from './CategorieMateriel.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class MaterielDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public reference: string;
    public quantite: string;
    public prix: number;
    public prixMax: string ;
    public prixMin: string ;
    public categorieMateriel: CategorieMaterielDto ;

}
