import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {UserService} from 'src/app/zynerator/security/User.service';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {User} from 'src/app/zynerator/security/User.model';
import {Role} from 'src/app/zynerator/security/Role.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  constructor(private userService:UserService, private messageService: MessageService,
    private confirmationService: ConfirmationService, private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.findAll();
    this.userService.findAll();
  }

    openNew() {
        this.user = new User();
        this.submitted = false;
        this.userDialog = true;
    }

    editUser(user: User) {
      this.user = {...user};
      this.userDialog = true;
    }

     hideDialog() {
        this.userDialog = false;
        this.submitted = false;
    }

    saveUser() {
        this.submitted = true;
        console.log(this.user)
        this.userService.save(this.user)
        this.userDialog = false;
    }

    editUserSubmit(){
       this.submitted = true;
       console.log("before update")
       console.log(this.user)
       this.userService.update(this.user)
       this.userDialog = false;
       this.messageService.add({severity:'success', summary:'User edit', detail:'User was editted'});

    }

    deleteUser(user: User) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + user.prenom+" "+user.nom + ' ?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.userService.delete(user.id);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
            }
        });
    }


  get users():User[]{
    return this.userService.users;
  }
  set users(users:User[]){
    this.userService.users = users;
  }
  get selectedUsers():User[]{
    return this.userService.selectedUsers;
  }
  set selectedUsers(selectedUsers:User[]){
    this.userService.selectedUsers = selectedUsers;
  }
  get userDialog():boolean{
    return this.userService.userDialog;
  }
  set userDialog(userDialog:boolean){
    this.userService.userDialog = userDialog;
  }
  get user():User{
    return this.userService.user;
  }
  set user(user:User){
    this.userService.user = user;
  }
    get submitted():boolean{
    return this.userService.submitted;
  }
  set submitted(submitted:boolean){
    this.userService.submitted = submitted;
  }
      get roles():Role[]{
    return this.roleService.roles;
  }
  set role(roles:Role[]){
    this.roleService.roles =roles;
  }

}
