import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {environment} from 'src/environments/environment';

import {User} from './User.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly API = environment.apiUrl;
    private _users: User[] = [];
    private _selectedUsers: User[] = [];
    private _userDialog: boolean = false;
    private _user: User = new User();
    private _submitted: boolean;

    constructor(private http: HttpClient) {
    }

    public findAll() {
        this.http.get<User[]>(this.API).subscribe(users => {
            this._users = users;
        }, (error: HttpErrorResponse) => {
            console.log(error.error)
        })
    }

    public save(user: User) {
        this.http.post<User>(this.API + "save", user).subscribe(user => {
            this._users = [...this._users, user];
        }, (error: HttpErrorResponse) => {
            console.log(error.error)
        })
    }

    public update(user: User) {
        this.http.put<User>(this.API, user).subscribe(user => {
            const index = this._users.findIndex(userToBeFound => user.id == userToBeFound.id);
            index > -1 ? this._users[index] = user : false;
        }, (error: HttpErrorResponse) => {
            console.log(error.error)
        });
    }

    public delete(id: number) {
        this.http.delete<number>(this.API + "id/" + id).subscribe(res => {
            res == 1 ? this._users = this._users.filter(user => user.id != id) : false;
        })
    }

    // getters and setters
    public get users(): User[] {
        return this._users;
    }

    public set users(users: User[]) {
        this._users = users;
    }

    public get selectedUsers(): User[] {
        return this._users;
    }

    public set selectedUsers(selectedUsers: User[]) {
        this._selectedUsers = selectedUsers;
    }

    public get userDialog(): boolean {
        return this._userDialog;
    }

    public set userDialog(userDialog: boolean) {
        this._userDialog = userDialog;
    }

    public get user(): User {
        return this._user;
    }

    public set user(user: User) {
        this._user = user;
    }

    public get submitted(): boolean {
        return this._submitted;
    }

    public set submitted(submitted: boolean) {
        this._submitted = submitted;
    }
}
