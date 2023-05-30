import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { User } from 'src/app/zynerator/security/User.model';
import { AuthService } from 'src/app/zynerator/security/Auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    roleAdmin = false;

    constructor(public app: AppComponent, public appMain: AppMainComponent, private authService: AuthService, private translateService: TranslateService) {
    }

    useLanguage(language: string): void {
        this.translateService.use(language);
    }
    ngOnInit(): void {
        this.authService.loadInfos();
        if ( this.authService.authenticatedUser.roles[0] === 'ROLE_ADMIN'){
            this.roleAdmin = true;
        }
    }



    get authenticatedUser(): User{
        return this.authService.authenticatedUser;
    }

    logout(){
        this.authService.logout();
    }
}
