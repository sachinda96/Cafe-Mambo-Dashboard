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
  message: any;
  failedMessage: any;
  modelSuccess: any;
  modelError: any;
  modelValidate: any;
  id: any = '';

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

    this.userService.getAllUser().subscribe((res) => {
      this.userList = res;
    });
  }

  deleteUser(id: string) {
    if (this.id == '') {
      this.id = id;
      this.modelValidate.click();
    } else {
      this.userService.removeUser(id).subscribe(
        (res) => {
          this.id = '';
          this.message = 'Successfully Deleted';
          this.modelSuccess.click();
          this.getAllUsers();
        },
        (err) => {
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
}
