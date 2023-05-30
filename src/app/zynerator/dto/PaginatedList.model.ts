import {BaseDto} from './BaseDto.model';

export class PaginatedList<DTO extends BaseDto> {
    public list: Array<DTO>;
    public dataSize: number = 0;
}
