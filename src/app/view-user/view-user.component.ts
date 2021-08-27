import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  userList: Array<User> = new Array<User>();
  tempUserList: Array<User> = new Array<User>();
  message: any;
  failedMessage: any;
  modelSuccess: any;
  modelError: any;
  modelValidate: any;
  id: any = '';
  value: any;
  type: any;
  isLoading: boolean = false;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.modelSuccess = document.getElementById('modelSuccess') as HTMLElement;
    this.modelError = document.getElementById('dangerModel') as HTMLElement;
    this.modelValidate = document.getElementById('validateModel') as HTMLElement;
    this.getAllUsers();
  }

  getAllUsers() {
    this.userList = new Array<User>();
    this.tempUserList = new Array<User>();
    this.isLoading = true;
    this.userService.getAllUser().subscribe((res) => {
      this.isLoading = false;
      this.userList = res;
      this.tempUserList = res;
    });
  }

  deleteUser(id: string) {
    if (this.id == '') {
      this.id = id;
      this.modelValidate.click();
    } else {
      this.isLoading = true;
      this.userService.removeUser(id).subscribe(
        (res) => {
          this.isLoading = false;
          this.id = '';
          this.message = 'Successfully Deleted';
          this.modelSuccess.click();
          this.getAllUsers();
        },
        (err) => {
          this.isLoading = false;
          this.failedMessage = 'Failed to delete';
          this.modelError.click();
        }
      );
    }
  }

  delete() {
    this.deleteUser(this.id);
  }

  clearSelect() {
    this.id = '';
  }

  setType(event: any) {
    this.type = event.target.value;
  }

  search() {
    if(this.value == ""){
      this.getAllUsers();
    }else if(this.type == "name"){
      this.tempUserList = this.userList.filter(user => user.name.includes(this.value));
    }else if(this.type == "email"){
      this.tempUserList = this.userList.filter(user => user.email.includes(this.value));
    }else if(this.type == "role"){
      this.tempUserList = this.userList.filter(user => user.role.includes(this.value));
    }
  }
}
