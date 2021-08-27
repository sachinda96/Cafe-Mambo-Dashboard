import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import {__assign} from "tslib";
import {elementAt} from "rxjs/operators";

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
})
export class ManageUserComponent implements OnInit {
  roles: string[] = [
    'ADMIN',
    'CASHIER',
    'KITCHEN'
  ];
  user: User = new User();

  message: any;
  failedMessage: any;
  modelSuccess: any;
  modelError: any;
  type: any = 'Save';
  imageModel: any;
  isDisabled:boolean = false;
  nameInvalid: boolean =false;
  emailInvalid: boolean = false;
  ContactInvalid: boolean =false;
  passwordInvalid: boolean = false;
  roleInvalid: boolean = false;
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private routerActive: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.routerActive.params.subscribe((params) => {
      if (params.id != null || params.id != undefined) {
        this.type = 'Update';
        this.isDisabled = true;
        this.getUser(params.id);
      }
    });
    this.modelSuccess = document.getElementById('modelSuccess') as HTMLElement;
    this.modelError = document.getElementById('dangerModel') as HTMLElement;
    this.imageModel = document.getElementById('imageModel') as HTMLElement;
  }

  getUser(id: any) {
    this.isLoading = true;
    this.userService.getUser(id).subscribe((res) => {
      this.isLoading = false;
      this.user = res;
    });
  }

  setUserRole(event: any) {
    this.user.role = event.target.value;
  }

  clear() {
    if (this.type == 'Update') {
      this.route.navigate(['/nav/alluser']);
    } else {
      this.user = new User();
    }
  }
  save() {
    this.nameInvalid = false;
    this.emailInvalid =false;
    this.ContactInvalid = false;
    this.roleInvalid =false;
    this.passwordInvalid =false;

    if(this.user.name == ""){
      this.nameInvalid = true;
    }else if (this.user.email == "") {
      this.emailInvalid =true;
    }else if(this.user.telNo == "") {
      this.ContactInvalid = true;
    }else if(this.user.role == "") {
      this.roleInvalid =true;
    }else if(this.user.password == "") {
        this.passwordInvalid =true;
    }else{
      this.isLoading = true;
      if (this.type == 'Update') {

        this.userService.update(this.user).subscribe(
          (res) => {
            this.isLoading = false;
            this.message = 'User is Updated';
            this.modelSuccess.click();
          },
          (err) => {
            this.isLoading = false;
            this.failedMessage = 'Failed to update';
            this.modelError.click();
          }
        );
      } else {
        this.userService.save(this.user).subscribe(
          (res) => {
            this.isLoading = false;
            this.message = 'User is Added Successfully';
            this.modelSuccess.click();
          },
          (error) => {
            this.isLoading = false;
            this.failedMessage = 'Failed to save';
            this.modelError.click();
          }
        );
      }
    }
  }
}
