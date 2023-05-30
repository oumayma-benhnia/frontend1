import {TypeDeclarationDto} from './TypeDeclaration.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DeclarationDto  extends BaseDto{

    public id: number;
    public reference: string;
    public libelle: string;
    public typeDeclaration: TypeDeclarationDto ;

}
