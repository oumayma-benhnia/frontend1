import {ConfirmationService, MessageService,MenuItem} from 'primeng/api';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';
@Injectable()
export class AbstractCreateController<DTO extends BaseDto, CRITERIA extends BaseCriteria, SERVICE extends AbstractService<DTO, CRITERIA>> {

    protected _submitted = false;
    protected _errorMessages = new Array<string>();
    protected datePipe: DatePipe;
    protected service: SERVICE;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    protected _activeTab = 0;



    public constructor(service: SERVICE, @Inject(PLATFORM_ID) private platformId?) {
        this.service = service;
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);

    }

    public save(): void {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.submitted = false;
                this.item = this.service.constrcutDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
    }
    public uploadOne(event, i: number): void{
        console.log(event.files[0]);
        let formData = new FormData();
        formData.append('file',event.files[0]);
        this.service.upload(formData,i);
    }

    public uploadMultiple(event, i: number): void{
        console.log(event.files);
        const formData: FormData = new FormData();
        for (let i = 0; i < event.files.length; i++) {
            formData.append('files', event.files[i]);
        }
        this.service.uploadMultiple(formData,i);
    }
    public validateForm(): void {
    }

    public setValidation(value: boolean) {
    }
    public performNext(): void {
        this.service.performNext();
    }

    public performBack(): void {
        this.service.performBack();
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.setValidation(true);
    }

    get items(): Array<DTO> {
        return this.service.items;
    }

    set items(value: Array<DTO>) {
        this.service.items = value;
    }

    get item(): DTO {
        return this.service.item;
    }

    set item(value: DTO) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): CRITERIA {
        return this.service.criteria;
    }

    set criteria(value: CRITERIA) {
        this.service.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }


    get index(): number {
        return this.service.index;
    }

    set index(value: number) {
        this.service.index = value;
    }

    get back(): boolean {
        return this.service.back;
    }

    set back(value: boolean) {
        this.service.back = value;
    }

    get next(): boolean {
        return this.service.next;
    }

    set next(value: boolean) {
        this.service.next = value;
    }

    get validate(): boolean {
        return this.service.validate;
    }

    set validate(value: boolean) {
        this.service.validate = value;
    }
    get steps(): MenuItem[] {
        return this.service.steps;
    }

    set steps(value: MenuItem[]) {
        this.service.steps = value;
    }


    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
    }
    get fileTempDtos(): Array<FileTempDto[]> {
        return this.service.fileTempDtos;
    }

    set fileTempDtos(value: Array<FileTempDto[]>) {
        this.service.fileTempDtos = value;
    }

    get fileTempDtosForOne(): FileTempDto[] {
        return this.service.fileTempDtosForOne;
    }

    set fileTempDtosForOne(value: FileTempDto[]) {
        this.service.fileTempDtosForOne = value;
    }
}
