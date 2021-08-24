import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

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
    this.userService.getUser(id).subscribe((res) => {

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
    if (this.user.email == '') {
      this.failedMessage = 'Enter a valid Email';
      this.modelError.click();
    } else {
      if (this.type == 'Update') {
        this.userService.update(this.user).subscribe(
          (res) => {
            this.message = 'Employee is Updated';
            this.modelSuccess.click();
          },
          (err) => {
            this.failedMessage = 'Failed to update';
            this.modelError.click();
          }
        );
      } else {
        this.userService.save(this.user).subscribe(
          (res) => {
            this.message = 'Employee is Added Successfully';
            this.modelSuccess.click();
          },
          (error) => {
            this.failedMessage = 'Failed to save';
            this.modelError.click();
          }
        );
      }
    }
  }
}
