import {MessageService} from 'primeng/api';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageServiceHelper {

    constructor(private messageService: MessageService) {
    }

    //message autorisation
    public addMessageAuthenticationError() {
        this.messageService.add({
            severity: 'error', summary: 'erreur', detail: 'Problème d\'autorisation'
        });
    }

    //message permission
    public addMessagePermissionError() {
        this.messageService.add({
            severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
        });
    }

    //message de succes avec detail
    public addMessageSuccessWithDetail(detail: string) {
        this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: detail,
            life: 3000
        });
    }

    //message erreur avec detail
    public addMessageErrorWithDetail(detail: string) {
        this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: detail,
            life: 3000
        });
    }

    //message personnalisable
    public addMessage(severity: string, summary: string, detail: string, life: number = 3000) {
        this.messageService.add({
            severity: severity,
            summary: summary,
            detail: detail,
            life: life
        });
    }

    //message de validation de formulaire avec array erreurs
    public addMessageErrorFormWithErrors(erreurs: string[]) {
        this.messageService.add({
            severity: 'error',
            summary: 'Erreurs',
            detail: 'Merci de corrigé les erreurs suivant : ' + erreurs
        });
    }

    //message de validation de formulaire sans array erreurs
    public addMessageErrorForm() {
        this.messageService.add({
            severity: 'error',
            summary: 'Erreurs',
            detail: 'Merci de corrigé les erreurs sur le formulaire'
        });
    }
}
